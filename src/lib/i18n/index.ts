import { browser } from '$app/environment';
import { init, register } from 'svelte-i18n';

const defaultLocale = 'fr-CA';

register('en-CA', () => import('./locales/enCA.json'));
register('en', () => import('./locales/enCA.json'));
register('fr-CA', () => import('./locales/frCA.json'));
register('fr', () => import('./locales/frCA.json'));

init({
	fallbackLocale: defaultLocale,
	initialLocale: browser ? window.navigator.language : defaultLocale
});
