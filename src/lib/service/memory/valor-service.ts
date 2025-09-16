/**
 * In-memory store for Valors. Very temporary.
 * @since 2025-09-06
 * @author Michael Townsend <@continuities>
 */

import { VALORS } from '$lib/mock-data';

const getValors = async (): Promise<Model.Valor[]> => {
	return VALORS;
};

const addMissingValors = async (valors: Model.Valor[]): Promise<void> => {
	const existingValorIds = new Set(VALORS.map((t) => t.id));
	for (const valor of valors) {
		if (!existingValorIds.has(valor.id)) {
			VALORS.push(valor);
			existingValorIds.add(valor.id);
		}
	}
};

const ValorService: Service.ServiceConstructor<Service.ValorService> = () => ({
	getValors,
	addMissingValors
});

export default ValorService;
