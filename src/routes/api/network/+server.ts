import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { CommunityFilter } from '$lib/filter';

export const GET: RequestHandler = async ({ url, locals }) => {
	const filter = CommunityFilter(url.searchParams);
	return json(await locals.services.community.getCommunities(filter));
};
