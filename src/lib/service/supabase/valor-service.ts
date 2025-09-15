/**
 * Valor Service with Supabase as the backend.
 * @since 2025-09-15
 * @author Michael Townsend <@continuities>
 */

import { VALORS } from '$lib/mock-data';

const addMissingValors = async (valors: Model.Valor[]): Promise<void> => {
	const existingValorIds = new Set(VALORS.map((t) => t.id));
	for (const valor of valors) {
		if (!existingValorIds.has(valor.id)) {
			VALORS.push(valor);
			existingValorIds.add(valor.id);
		}
	}
};

const addValor = async (valor: Model.Valor): Promise<void> => {
	VALORS.push(valor);
};

const ValorService: Service.ServiceConstructor<Service.ValorService> = ({ supabase }) => ({
	getValors: async () => {
		const { data } = (await supabase?.from('valor').select(`
			id,
			name,
			description,
			icon
		`)) ?? { data: null };
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
		const { data: i18nvals } = (await supabase
			?.from('localisations')
			.select('*')
			.in('id', i18nkeys)) ?? { data: null };

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
	addMissingValors,
	addValor
});

export default ValorService;
