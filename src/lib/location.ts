export const parseLocation = (locationString: string): Model.Location => {
	const [city, stateCode, countryCode] = locationString.split(',').map((s) => s.trim());
	return {
		city,
		stateCode,
		countryCode
	};
};

export const locationToString = (location: Model.Location): string =>
	[location.city, location.stateCode, location.countryCode].filter(Boolean).join(', ');

export const locationsEqual = (
	loc1: Model.Location | undefined,
	loc2: Model.Location | undefined
): boolean => {
	return (
		loc1?.city === loc2?.city &&
		loc1?.stateCode === loc2?.stateCode &&
		loc1?.countryCode === loc2?.countryCode
	);
};
