<script lang="ts">
	import { locationToString } from '$lib/location';
	import Autocomplete from '@smui-extra/autocomplete';
	import { City, State, Country } from 'country-state-city';

	const MAX_HASH_KEY_LENGTH = 5;

	type Props = {
		value?: Model.Location | undefined;
		label?: string | undefined;
		name?: string | undefined;
		required?: boolean | undefined;
		fullWidth?: boolean | undefined;
		cities?: boolean | undefined;
		states?: boolean | undefined;
		countries?: boolean | undefined;
	};

	let {
		value = $bindable(),
		label,
		required,
		name,
		fullWidth,
		cities,
		states,
		countries
	}: Props = $props();
	let text = $derived(value ? locationToString(value) : '');

	const getKey = (str: string) => str.substring(0, MAX_HASH_KEY_LENGTH).toLowerCase();
	const populateHash = (hash: Record<string, Model.Location[]>, location: Model.Location) => {
		const key = getKey(locationToString(location));
		if (!hash[key]) {
			hash[key] = [];
		}
		hash[key].push(location);
		return hash;
	};

	const locationHash: Record<string, Model.Location[]> = {};
	if (cities) {
		for (const city of City.getAllCities()) {
			populateHash(locationHash, {
				city: city.name,
				stateCode: city.stateCode,
				countryCode: city.countryCode
			});
		}
	}
	if (states) {
		for (const state of State.getAllStates()) {
			populateHash(locationHash, {
				stateCode: state.isoCode,
				countryCode: state.countryCode
			});
		}
	}
	if (countries) {
		for (const country of Country.getAllCountries()) {
			populateHash(locationHash, {
				countryCode: country.isoCode
			});
		}
	}

	let currentKey = $derived(getKey(text));
	let locations = $derived(locationHash[currentKey] ?? []);
</script>

<Autocomplete
	bind:value
	bind:text
	textfield$required={required}
	textfield$input$name={name}
	textfield$style={fullWidth ? 'width: 100%' : undefined}
	options={locations}
	showMenuWithNoInput={false}
	{label}
	getOptionLabel={locationToString}
/>
