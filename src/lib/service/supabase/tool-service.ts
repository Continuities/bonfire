/**
 * Tool Service using Supabase as the backend.
 * @since 2025-09-15
 * @author Michael Townsend <@continuities>
 */
import { TOOLS, TOOL_TYPES } from '$lib/mock-data';

const getTools = async (): Promise<Model.Tool[]> => {
	return TOOLS;
};

const getToolTypes = async (): Promise<Record<Model.ToolTypeId, Model.ToolType>> => {
	return TOOL_TYPES;
};

const addMissingTools = async (tools: Model.Tool[]): Promise<void> => {
	const existingToolIds = new Set(TOOLS.map((t) => t.id));
	for (const tool of tools) {
		if (!existingToolIds.has(tool.id)) {
			TOOLS.push(tool);
			existingToolIds.add(tool.id);
		}
	}
};

const addTool = async (tool: Model.Tool): Promise<void> => {
	TOOLS.push(tool);
};

const ToolService: Service.ServiceConstructor<Service.ToolService> = () => ({
	getTools,
	getToolTypes,
	addMissingTools,
	addTool
});

export default ToolService;
