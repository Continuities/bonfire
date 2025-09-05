import { VALORS } from '$lib/mock-data';

export const getValors = async (): Promise<Model.Valor[]> => {
	// Hardcoded for now, but attach to a database later
	return VALORS;
};

export const addValor = async (valor: Model.Valor): Promise<void> => {
	// Yup, I'm even modifying this one in place!
	VALORS.push(valor);
};
