import type { Handle } from '@sveltejs/kit';
import { middleware as supabaseMiddleware } from './supabase';

export const middleware: Handle[] = supabaseMiddleware;

export { default as CommunityService } from './supabase/community-service';
export { default as ToolService } from './supabase/tool-service';
export { default as ValorService } from './supabase/valor-service';
