import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({
	locals: { services }
}): Promise<{ network: Model.Community[] }> => ({
	network: await services.community.getCommunities({ limit: 3 })
});
