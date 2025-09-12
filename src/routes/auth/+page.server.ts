/**
 * Code from https://supabase.com/docs/guides/auth/server-side/sveltekit
 */

import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
export const actions: Actions = {
	signup: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();
		const email = formData.get('email') as string;
		const password = formData.get('password') as string;
		const { error } = (await supabase?.auth.signUp({ email, password })) ?? {
			error: new Error('Supabase client not initialized')
		};
		if (error) {
			console.error(error);
			redirect(303, '/auth/error');
		} else {
			redirect(303, '/');
		}
	},
	login: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();
		const email = formData.get('email') as string;
		const password = formData.get('password') as string;
		const { error } = (await supabase?.auth.signInWithPassword({ email, password })) ?? {
			error: new Error('Supabase client not initialized')
		};
		if (error) {
			console.error(error);
			redirect(303, '/auth/error');
		} else {
			redirect(303, '/');
		}
	}
};
