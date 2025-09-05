import type { PageServerLoad } from './$types';
import { addCommunity, getCommunities } from '$lib/service/community-service';
import { v4 as uuid } from 'uuid';
import { fail } from '@sveltejs/kit';

export const load: PageServerLoad = async (): Promise<{ communities: Model.Community[] }> => ({
	communities: await getCommunities()
});

export const actions = {
	default: async ({ request }) => {
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
		const valors = JSON.parse(data.get('valors')?.toString() ?? '{}');
		const tools = JSON.parse(data.get('tools')?.toString() ?? '{}');

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

		await addCommunity(community);
	}
};
