import type { Handle } from '@sveltejs/kit';
import { middleware as supabaseMiddleware } from './supabase';

export const middleware: Handle[] = supabaseMiddleware;
