/**
 * Valor Service with Supabase as the backend.
 * @since 2025-09-15
 * @author Michael Townsend <@continuities>
 */

const ValorService: Service.ServiceConstructor<Service.ValorService> = ({ supabase }) => ({
	getValors: async () => {
		if (!supabase) {
			return [];
		}
		const { data, error } = await supabase.from('valor').select();
		if (error) {
			console.error('Error fetching valors:', error);
		}
		const valors =
			data?.map<Model.Valor>((d) => ({
				id: d.id,
				name: {},
				description: {},
				icon: d.icon
			})) ?? [];

		const valorIds = valors.map((v) => v.id);
		const valorsById = new Map(valors.map((v) => [v.id, v]));
		const i18nkeys = valorIds.flatMap((id) => [`valor.name.${id}`, `valor.description.${id}`]);
		const { data: i18nvals, error: i18nerror } = (await supabase
			?.from('localisation')
			.select('*')
			.in('id', i18nkeys)) ?? { data: null };

		if (i18nerror) {
			console.error('Error fetching valor i18n:', i18nerror);
		}

		i18nvals?.forEach(({ id, locale_key, text }) => {
			const [, field, valorId] = id.split('.');
			const valor = valorsById.get(valorId);
			if (!valor) {
				return;
			}
			switch (field) {
				case 'name':
					valor.name[locale_key] = text;
					break;
				case 'description':
					valor.description[locale_key] = text;
					break;
			}
		});
		return valors;
	},
	addMissingValors: async (valors: Model.Valor[]) => {
		if (!supabase) {
			return;
		}
		const texts = valors.flatMap((valor) =>
			Object.entries(valor.name).map(([locale_key, text]) => ({
				id: `valor.name.${valor.id}`,
				locale_key,
				text
			}))
		);
		const valor_rows = valors.map((valor) => ({
			id: valor.id,
			icon: valor.icon
		}));
		await supabase
			.from('localisation')
			.upsert(texts, { onConflict: 'id,locale_key', ignoreDuplicates: true });
		await supabase.from('valor').upsert(valor_rows, { onConflict: 'id', ignoreDuplicates: true });
	}
});

export default ValorService;
