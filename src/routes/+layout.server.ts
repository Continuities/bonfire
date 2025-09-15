import type { Session } from '@supabase/supabase-js';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({
	locals: { safeGetSession, services },
	cookies
}): Promise<{
	valors: Model.Valor[];
	tools: Model.Tool[];
	toolTypes: Record<Model.ToolTypeId, Model.ToolType>;
	session: Session | null;
	cookies: { name: string; value: string }[];
}> => {
	const [valors, tools, toolTypes, session] = await Promise.all([
		services.valor.getValors(),
		services.tool.getTools(),
		services.tool.getToolTypes(),

		// The following is from https://supabase.com/docs/guides/auth/server-side/sveltekit
		(await safeGetSession()).session
	]);
	return { valors, tools, toolTypes, session, cookies: cookies.getAll() };
};
