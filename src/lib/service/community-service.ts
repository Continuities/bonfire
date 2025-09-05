import { COMMUNITIES } from '$lib/mock-data';

export const getCommunities = async (): Promise<Model.Community[]> => {
	// Hardcoded for now, but attach to a database later
	return COMMUNITIES;
};
