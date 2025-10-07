/**
 * Valor Service with Supabase as the backend.
 * @since 2025-09-15
 * @author Michael Townsend <@continuities>
 */

const ValorService: Service.ServiceConstructor<Service.ValorService> = ({ supabase }) => {
	const getValors = async (filter: Filter.ValorFilter = {}): Promise<Model.Valor[]> => {
		if (!supabase) {
			return [];
		}
		let query = supabase.from('valor').select(`
			id,
			name,
			description,
			icon
		`);
		if (filter.id) {
			query = query.in('id', filter.id);
		}
		if (filter.limit) {
			query = query.limit(filter.limit);
		}

		const { data, error } = await query;
		if (error) {
			console.error('Error fetching valors:', error);
		}
		const valors = await Promise.all(
			data?.map<Promise<Model.Valor>>(async (d) => {
				const upheld_by = await supabase
					.from('valors_for_community')
					.select(`community_id`)
					.eq('valor_id', d.id);
				return {
					id: d.id,
					name: d.name,
					description: d.description,
					icon: d.icon,
					upheld_by: upheld_by.data?.map((u) => u.community_id) ?? []
				};
			}) ?? []
		);

		return valors;
	};
	return {
		getValors,
		getValorsForCommunity: async (communityId: Model.CommunityId) => {
			if (!supabase) {
				return [];
			}
			const { data, error } = await supabase
				.from('valors_for_community')
				.select(`community_id, valor_id`)
				.eq('community_id', communityId);
			if (error) {
				console.error('Error fetching valors for community:', error);
			}
			return getValors({ id: data?.map((d) => d.valor_id) });
		},
		addMissingValors: async (valors: Model.Valor[]) => {
			if (!supabase) {
				return;
			}
			const valor_rows = valors.map((valor) => ({
				id: valor.id,
				icon: valor.icon,
				name: valor.name,
				description: valor.description
			}));
			await supabase.from('valor').upsert(valor_rows, { onConflict: 'id', ignoreDuplicates: true });
		}
	};
};

export default ValorService;
