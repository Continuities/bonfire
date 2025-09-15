import type { Handle } from '@sveltejs/kit';
import { middleware as supabaseMiddleware } from './supabase';

export const middleware: Handle[] = supabaseMiddleware;

export { default as CommunityService } from './memory/community-service';
export { default as ToolService } from './memory/tool-service';
export { default as ValorService } from './supabase/valor-service';
