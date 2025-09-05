import { TOOLS } from '$lib/mock-data';

export const getTools = async (): Promise<Model.Tool[]> => {
	// Hardcoded for now, but attach to a database later
	return TOOLS;
};
