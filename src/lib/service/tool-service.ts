import { TOOLS } from '$lib/mock-data';

export const getTools = async (): Promise<Model.Tool[]> => {
	// Hardcoded for now, but attach to a database later
	return TOOLS;
};

export const addTool = async (tool: Model.Tool): Promise<void> => {
	// Yup, I'm modifying this in place too!
	TOOLS.push(tool);
};
