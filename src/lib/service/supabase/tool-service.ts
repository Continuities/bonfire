/**
 * Tool Service using Supabase as the backend.
 * @since 2025-09-15
 * @author Michael Townsend <@continuities>
 */

import type { PostgrestSingleResponse } from '@supabase/supabase-js';

const ToolService: Service.ServiceConstructor<Service.ToolService> = ({ supabase }) => ({
	getTools: async (filter = {}) => {
		if (!supabase) {
			return [];
		}
		let query = supabase.from('tool').select();
		if (filter.id) {
			query = query.in('id', filter.id);
		}
		const { data, error } = await query;
		if (error) {
			console.error('Error fetching tools:', error);
		}
		const tools =
			data?.map<Model.Tool>((d) => ({
				id: d.id,
				name: d.name,
				description: {},
				url: d.url,
				types: {} // TODO
			})) ?? [];

		const toolIds = tools.map((t) => t.id);
		const toolsById = new Map(tools.map((t) => [t.id, t]));

		const typeQuery = (await supabase
			.from('tool_types_for_tool')
			.select(
				`
				tool_id,
				tool_type (id, icon)
			`
			)
			.in('tool_id', toolIds)) as PostgrestSingleResponse<
			{
				tool_id: string;
				tool_type: { id: string; icon: string | undefined };
			}[]
		>;
		if (typeQuery.error) {
			console.error('Error fetching tool types:', typeQuery.error);
		}

		const typesById = new Map<Model.ToolTypeId, Model.ToolType>();
		typeQuery.data?.forEach((t) => {
			if (!typesById.has(t.tool_type.id)) {
				typesById.set(t.tool_type.id, {
					id: t.tool_type.id,
					icon: t.tool_type.icon,
					name: {},
					description: {}
				});
				const tool = toolsById.get(t.tool_id);
				if (tool) {
					tool.types[t.tool_type.id] = typesById.get(t.tool_type.id)!;
				}
			}
		});

		const i18nkeys = [
			...toolIds.map((id) => `tool.description.${id}`),
			...typesById.keys().flatMap((id) => [`tool_type.name.${id}`, `tool_type.description.${id}`])
		];
		const { data: i18nvals, error: i18nerror } = (await supabase
			?.from('localisation')
			.select('*')
			.in('id', i18nkeys)) ?? { data: null };

		if (i18nerror) {
			console.error('Error fetching i18n:', i18nerror);
		}

		i18nvals?.forEach(({ id, locale_key, text }) => {
			const [item, field, itemId] = id.split('.');

			switch (item) {
				case 'tool_type': {
					switch (field) {
						case 'name':
							typesById.get(itemId)!.name[locale_key] = text;
							break;
						case 'description':
							typesById.get(itemId)!.description[locale_key] = text;
							break;
					}
					break;
				}
				case 'tool': {
					switch (field) {
						case 'description':
							toolsById.get(itemId)!.description[locale_key] = text;
							break;
					}
					break;
				}
			}
		});
		return tools;
	},
	getToolTypes: async () => {
		if (!supabase) {
			return {};
		}
		const { data, error } = await supabase.from('tool_type').select();
		if (error) {
			console.error('Error fetching tool types:', error);
		}
		const types =
			data?.map<Model.ToolType>((d) => ({
				id: d.id,
				icon: d.icon,
				name: {},
				description: {}
			})) ?? [];

		const typeIds = types.map((t) => t.id);
		const typesById = new Map(types.map((t) => [t.id, t]));

		const i18nkeys = typeIds.flatMap((id) => [
			`tool_type.name.${id}`,
			`tool_type.description.${id}`
		]);
		const i18nQuery = await supabase?.from('localisation').select('*').in('id', i18nkeys);

		if (i18nQuery.error) {
			console.error('Error fetching i18n:', i18nQuery.error);
		}
		i18nQuery.data?.forEach(({ id, locale_key, text }) => {
			const [, field, typeId] = id.split('.');
			switch (field) {
				case 'name':
					typesById.get(typeId)!.name[locale_key] = text;
					break;
				case 'description':
					typesById.get(typeId)!.description[locale_key] = text;
					break;
			}
		});
		return Object.fromEntries(typesById);
	},
	addMissingTools: async (tools: Model.Tool[]) => {
		if (!supabase) {
			return;
		}
		const tool_rows = tools.map((tool) => ({
			id: tool.id,
			name: tool.name,
			url: tool.url
		}));
		const types = tools.reduce<Record<Model.ToolTypeId, Model.ToolType>>((acc, tool) => {
			for (const type of Object.values(tool.types)) {
				acc[type.id] = type;
			}
			return acc;
		}, {});
		const type_rows = Object.values(types).map((type) => ({
			id: type.id,
			icon: type.icon
		}));
		const tool_type_for_tool_rows = tools.flatMap((tool) =>
			Object.values(tool.types).map((type) => ({
				tool_id: tool.id,
				tool_type_id: type.id
			}))
		);
		const i18n_rows = [
			...tools.flatMap((tool) =>
				Object.entries(tool.description).map(([locale_key, text]) => ({
					id: `tool.description.${tool.id}`,
					locale_key,
					text
				}))
			),
			...Object.values(types).flatMap((type) => [
				...Object.entries(type.name).map(([locale_key, text]) => ({
					id: `tool_type.name.${type.id}`,
					locale_key,
					text
				})),
				...Object.entries(type.description).map(([locale_key, text]) => ({
					id: `tool_type.description.${type.id}`,
					locale_key,
					text
				}))
			])
		];

		await supabase
			.from('localisation')
			.upsert(i18n_rows, { onConflict: 'id,locale_key', ignoreDuplicates: true });
		await supabase
			.from('tool_type')
			.upsert(type_rows, { onConflict: 'id', ignoreDuplicates: true });
		await supabase.from('tool').upsert(tool_rows, { onConflict: 'id', ignoreDuplicates: true });
		await supabase.from('tool_types_for_tool').upsert(tool_type_for_tool_rows, {
			onConflict: 'tool_id,tool_type_id',
			ignoreDuplicates: true
		});
	}
});

export default ToolService;
