import { browser } from '$app/environment';
import { init, register } from 'svelte-i18n';

const defaultLocale = 'en';

register('en', () => import('./locales/enCA.json'));
register('fr', () => import('./locales/frCA.json'));

const browserLang = browser ? window.navigator.language : null;
const urlLang = browser ? new URLSearchParams(window.location.search).get('lang') : null;

init({
	fallbackLocale: defaultLocale,
	initialLocale: browserLang ?? urlLang ?? defaultLocale
});

export const resolveText = (text: I18n.LocaleText, locale: string | null | undefined): string => {
	if (typeof text === 'string') {
		return text;
	}

	const _locale = locale ?? defaultLocale;

	return text[_locale] ?? text[defaultLocale] ?? Object.values(text)[0] ?? '';
};
