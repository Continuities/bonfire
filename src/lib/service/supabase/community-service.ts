/**
 * Community Service with Supabase backend
 * @since 2025-09-16
 * @author Michael Townsend <@continuities>
 */

const CommunityService: Service.ServiceConstructor<Service.CommunityService> = ({
	supabase,
	services
}) => ({
	getCommunities: async (filter = {}) => {
		if (!supabase) {
			return [];
		}
		let query = supabase.from('community').select(`
			id,
			name,
			url,
			description,
			valor (id),
			tool!inner (id)
		`);
		if (filter.id) {
			query = query.in('id', filter.id);
		}
		if (filter.uses_tool) {
			query = query.eq('tool.id', filter.uses_tool);
		}
		if (filter.limit) {
			query = query.limit(filter.limit);
		}
		const { data, error } = await query;
		if (error) {
			console.error('Error fetching communities:', error);
		}

		const communities = await Promise.all(
			data?.map<Promise<Model.Community>>(async (d) => {
				const valors = await services.valor.getValors({ id: d.valor.map((v) => String(v.id)) });
				const tools = await services.tool.getTools({ id: d.tool.map((t) => String(t.id)) });
				return {
					id: d.id,
					name: d.name,
					description: d.description,
					url: d.url,
					valors: Object.fromEntries(valors.map((v) => [v.id, v])),
					tools: Object.fromEntries(tools.map((t) => [t.id, t]))
				};
			}) ?? []
		);

		return communities;
	},

	addCommunity: async (community: Model.Community) => {
		if (!supabase) {
			return;
		}
		await services.valor.addMissingValors(Object.values(community.valors));
		await services.tool.addMissingTools(Object.values(community.tools));

		const community_rows = [
			{
				id: community.id,
				name: community.name,
				url: community.url,
				description: community.description
			}
		];
		await supabase
			.from('community')
			.upsert(community_rows, { onConflict: 'id', ignoreDuplicates: true });

		await supabase.from('valors_for_community').upsert(
			Object.values(community.valors).map((valor) => ({
				community_id: community.id,
				valor_id: valor.id
			})),
			{ onConflict: 'community_id,valor_id', ignoreDuplicates: true }
		);
		await supabase.from('tools_for_community').upsert(
			Object.values(community.tools).map((tool) => ({
				community_id: community.id,
				tool_id: tool.id
			})),
			{ onConflict: 'community_id,tool_id', ignoreDuplicates: true }
		);
	}
});

export default CommunityService;
