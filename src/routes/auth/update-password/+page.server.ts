import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
export const actions: Actions = {
	update: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();
		const password = formData.get('password') as string;
		const confirm = formData.get('confirm') as string;

		if (password !== confirm) {
			redirect(303, '/auth/error');
		}

		const { error } = (await supabase?.auth.updateUser({ password })) ?? {
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
