/**
 * In-memory store for Communities. Very temporary.
 * @since 2025-09-06
 * @author Michael Townsend <@continuities>
 */

import { COMMUNITIES } from '$lib/mock-data';

export const getCommunities = async (): Promise<Model.Community[]> => {
	return COMMUNITIES;
};

export const addCommunity = async (community: Model.Community): Promise<void> => {
	COMMUNITIES.push(community);
};
