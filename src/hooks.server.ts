import type { Handle } from '@sveltejs/kit';
import { locale } from 'svelte-i18n';

export const handle: Handle = async ({ event, resolve }) => {
	const headerLang = event.request.headers.get('accept-language')?.split(',')[0];
	const urlLang = event.url.searchParams.get('lang');
	const lang = urlLang ?? headerLang;
	if (lang) {
		locale.set(lang);
	}
	return resolve(event);
};
