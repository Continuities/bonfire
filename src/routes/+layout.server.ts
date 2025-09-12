import { getTools, getToolTypes } from '$lib/service/tool-service';
import { getValors } from '$lib/service/valor-service';
import type { Session } from '@supabase/supabase-js';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({
	locals: { safeGetSession },
	cookies
}): Promise<{
	valors: Model.Valor[];
	tools: Model.Tool[];
	toolTypes: Record<Model.ToolTypeId, Model.ToolType>;
	session: Session | null;
	cookies: { name: string; value: string }[];
}> => {
	const [valors, tools, toolTypes, session] = await Promise.all([
		getValors(),
		getTools(),
		getToolTypes(),

		// The following is from https://supabase.com/docs/guides/auth/server-side/sveltekit
		(await safeGetSession()).session
	]);
	return { valors, tools, toolTypes, session, cookies: cookies.getAll() };
};
