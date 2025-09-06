/**
 * In-memory store for Tools. Very temporary.
 * @since 2025-09-06
 * @author Michael Townsend <@continuities>
 */

import { TOOLS } from '$lib/mock-data';

export const getTools = async (): Promise<Model.Tool[]> => {
	return TOOLS;
};

export const addMissingTools = async (tools: Model.Tool[]): Promise<void> => {
	const existingToolIds = new Set(TOOLS.map((t) => t.id));
	for (const tool of tools) {
		if (!existingToolIds.has(tool.id)) {
			TOOLS.push(tool);
			existingToolIds.add(tool.id);
		}
	}
};

export const addTool = async (tool: Model.Tool): Promise<void> => {
	TOOLS.push(tool);
};
