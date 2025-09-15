import type { PageServerLoad } from './$types';

import { v4 as uuid } from 'uuid';
import { fail } from '@sveltejs/kit';

export const load: PageServerLoad = async ({
	locals: { services }
}): Promise<{ communities: Model.Community[] }> => ({
	communities: await services.community.getCommunities()
});

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
			description,
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
