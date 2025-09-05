import { getCommunities } from '$lib/service/community-service';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (): Promise<{ communities: Model.Community[] }> => ({
	communities: await getCommunities()
});
