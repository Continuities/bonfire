import { browser } from '$app/environment';
import '$lib/i18n'; // Import to initialize. Important :)
import { locale, waitLocale } from 'svelte-i18n';
import type { LayoutLoad } from './$types';
import { createBrowserClient, createServerClient } from '@supabase/ssr';
import { PUBLIC_SUPABASE_PUBLISHABLE_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public';
import { doesPathRequireAuth, LOGIN_PATH } from '$lib/routes';
import { redirect } from '@sveltejs/kit';

export const load: LayoutLoad = async ({ url, data, depends }) => {
	if (browser) {
		const defaultLang = window.navigator.language;
		const urlLang = new URLSearchParams(window.location.search).get('lang');
		locale.set(urlLang ?? defaultLang);
	}
	await waitLocale();

	// The following is from https://supabase.com/docs/guides/auth/server-side/sveltekit

	/**
	 * Declare a dependency so the layout can be invalidated, for example, on
	 * session refresh.
	 */
	depends('supabase:auth');

	const supabase = browser
		? createBrowserClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_PUBLISHABLE_KEY, {
				global: {
					fetch
				}
			})
		: createServerClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_PUBLISHABLE_KEY, {
				global: {
					fetch
				},
				cookies: {
					getAll() {
						return data.cookies;
					}
				}
			});
	/**
	 * It's fine to use `getSession` here, because on the client, `getSession` is
	 * safe, and on the server, it reads `session` from the `LayoutData`, which
	 * safely checked the session using `safeGetSession`.
	 */
	const {
		data: { session }
	} = await supabase.auth.getSession();
	const {
		data: { user }
	} = await supabase.auth.getUser();

	if (!user && doesPathRequireAuth(url.pathname)) {
		const authPath = new URL(LOGIN_PATH);
		authPath.searchParams.set('redirect', url.pathname);
		redirect(303, authPath);
	}

	return {
		session,
		supabase,
		user,
		valors: data.valors,
		tools: data.tools,
		toolTypes: data.toolTypes
	};
};
