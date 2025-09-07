import { getTools, getToolTypes } from '$lib/service/tool-service';
import { getValors } from '$lib/service/valor-service';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (): Promise<{
	valors: Model.Valor[];
	tools: Model.Tool[];
	toolTypes: Record<Model.ToolTypeId, Model.ToolType>;
}> => {
	const [valors, tools, toolTypes] = await Promise.all([getValors(), getTools(), getToolTypes()]);
	return { valors, tools, toolTypes };
};
