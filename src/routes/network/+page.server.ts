import type { PageServerLoad } from './$types';

import { v4 as uuid } from 'uuid';
import { fail } from '@sveltejs/kit';
import { locale } from 'svelte-i18n';
import { get } from 'svelte/store';

export const load: PageServerLoad = async ({
	url,
	locals: { services }
}): Promise<{ communities: Model.Community[]; tool?: Model.Tool }> => {
	const filter: Filter.CommunityFilter = {};
	const uses_tool = url.searchParams.get('uses_tool');
	if (uses_tool) {
		filter.uses_tool = uses_tool;
	}
	return {
		communities: await services.community.getCommunities(filter),
		tool: uses_tool ? (await services.tool.getTools({ id: [uses_tool] }))[0] : undefined
	};
};

export const actions = {
	default: async ({ request, locals: { services } }) => {
		const data = await request.formData();

		const id = data.get('id')?.toString();

		if (id) {
			// This is an update
			console.log('[TODO] Update community', id);
			return fail(501, { message: 'Update not Implemented' });
		}

		const name = data.get('name')?.toString();
		const description = data.get('description')?.toString();
		const url = data.get('url')?.toString() ?? null;
		const valors: Record<Model.ValorId, Model.Valor> = JSON.parse(
			data.get('valors')?.toString() ?? '{}'
		);
		const tools: Record<Model.ToolId, Model.Tool> = JSON.parse(
			data.get('tools')?.toString() ?? '{}'
		);

		if (!name || !description || !valors || !tools) {
			return fail(400, { message: 'Missing required fields' });
		}

		const community: Model.Community = {
			id: uuid(),
			name,
			description: { [get(locale) ?? 'en']: description },
			url,
			valors,
			tools
		};

		await services.community.addCommunity(community);
		await services.valor.addMissingValors(Object.values(valors));
		await services.tool.addMissingTools(Object.values(tools));

		return { success: true };
	}
};
