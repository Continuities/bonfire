import { COMMUNITIES } from '$lib/mock-data';

export const getCommunities = async (): Promise<Model.Community[]> => {
	// Hardcoded for now, but attach to a database later
	return COMMUNITIES;
};

export const addCommunity = async (community: Model.Community): Promise<void> => {
	// Yup, I'm modifying this in place!
	COMMUNITIES.push(community);
};
