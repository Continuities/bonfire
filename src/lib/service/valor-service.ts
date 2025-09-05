import { VALORS } from '$lib/mock-data';

export const getValors = async (): Promise<Model.Valor[]> => {
	// Hardcoded for now, but attach to a database later
	return VALORS;
};
