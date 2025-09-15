/**
 * Interface for platform-agnostic Community Service
 * @since 2025-09-12
 * @author Michael Townsend <@continuities>
 */

import { COMMUNITIES } from '$lib/mock-data';

const CommunityService: Service.ServiceConstructor<Service.CommunityService> = () => ({
	getCommunities: async () => {
		return COMMUNITIES;
	},

	addCommunity: async (community: Model.Community) => {
		COMMUNITIES.push(community);
	}
});

export default CommunityService;
