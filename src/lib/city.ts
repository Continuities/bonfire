import type { ICity } from 'country-state-city';

export const parseCity = (cityString: string): ICity => {
	const [name, stateCode, countryCode] = cityString.split(',').map((s) => s.trim());
	return {
		name,
		stateCode,
		countryCode
	};
};

export const toString = (city: ICity): string =>
	`${city.name}, ${city.stateCode}, ${city.countryCode}`;
