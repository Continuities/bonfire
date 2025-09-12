import { middleware } from '$lib/service';
import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { locale } from 'svelte-i18n';

const initLanguage: Handle = async ({ event, resolve }) => {
	const headerLang = event.request.headers.get('accept-language')?.split(',')[0];
	const urlLang = event.url.searchParams.get('lang');
	const lang = urlLang ?? headerLang;
	if (lang) {
		locale.set(lang);
	}
	return resolve(event);
};

export const handle: Handle = sequence(initLanguage, ...middleware);
