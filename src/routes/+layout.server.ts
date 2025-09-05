import { getTools } from '$lib/service/tool-service';
import { getValors } from '$lib/service/valor-service';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (): Promise<{
	valors: Model.Valor[];
	tools: Model.Tool[];
}> => {
	const [valors, tools] = await Promise.all([getValors(), getTools()]);
	return { valors, tools };
};
