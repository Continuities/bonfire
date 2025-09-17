/**
 * Tool Service using Supabase as the backend.
 * @since 2025-09-15
 * @author Michael Townsend <@continuities>
 */

const ToolService: Service.ServiceConstructor<Service.ToolService> = ({ supabase }) => ({
	getTools: async (filter = {}) => {
		if (!supabase) {
			return [];
		}
		let query = supabase.from('tool').select(`
			id,
			name,
			description,
			url,
			tool_type (id, icon, name, description)
			`);
		if (filter.id) {
			query = query.in('id', filter.id);
		}
		if (filter.limit) {
			query = query.limit(filter.limit);
		}
		const { data, error } = await query;
		if (error) {
			console.error('Error fetching tools:', error);
		}

		const tools =
			data?.map<Model.Tool>((d) => ({
				id: d.id,
				name: d.name,
				description: d.description,
				url: d.url,
				types: Object.fromEntries(d.tool_type.map((t) => [t.id, t as Model.ToolType]))
			})) ?? [];

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
				name: d.name,
				description: d.description
			})) ?? [];

		return Object.fromEntries(types.map((t) => [t.id, t]));
	},
	addMissingTools: async (tools: Model.Tool[]) => {
		if (!supabase) {
			return;
		}
		const tool_rows = tools.map((tool) => ({
			id: tool.id,
			name: tool.name,
			url: tool.url,
			description: tool.description
		}));
		const types = tools.reduce<Record<Model.ToolTypeId, Model.ToolType>>((acc, tool) => {
			for (const type of Object.values(tool.types)) {
				acc[type.id] = type;
			}
			return acc;
		}, {});
		const type_rows = Object.values(types).map((type) => ({
			id: type.id,
			icon: type.icon,
			name: type.name,
			description: type.description
		}));
		const tool_type_for_tool_rows = tools.flatMap((tool) =>
			Object.values(tool.types).map((type) => ({
				tool_id: tool.id,
				tool_type_id: type.id
			}))
		);

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
