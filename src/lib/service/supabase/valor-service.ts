/**
 * Valor Service with Supabase as the backend.
 * @since 2025-09-15
 * @author Michael Townsend <@continuities>
 */

const ValorService: Service.ServiceConstructor<Service.ValorService> = ({ supabase }) => ({
	getValors: async (filter = {}) => {
		if (!supabase) {
			return [];
		}
		let query = supabase.from('valor').select();
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
		const valors =
			data?.map<Model.Valor>((d) => ({
				id: d.id,
				name: d.name,
				description: d.description,
				icon: d.icon
			})) ?? [];

		return valors;
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
});

export default ValorService;
