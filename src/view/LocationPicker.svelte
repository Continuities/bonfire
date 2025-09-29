<script lang="ts">
	import Autocomplete from '@smui-extra/autocomplete';
	import { City, type ICity } from 'country-state-city';

	const MAX_HASH_KEY_LENGTH = 5;

	type Props = {
		value?: String | undefined;
		label?: string | undefined;
		name?: string | undefined;
		required?: boolean | undefined;
		fullWidth?: boolean | undefined;
	};

	let { value = $bindable(), label, required, name, fullWidth }: Props = $props();
	let text = $state('');

	const getKey = (str: string) => str.substring(0, MAX_HASH_KEY_LENGTH).toLowerCase();

	const allCities: ICity[] = City.getAllCities();
	const cityHash = allCities.reduce<Record<string, ICity[]>>((hash, city) => {
		const key = getKey(city.name);
		if (!hash[key]) {
			hash[key] = [];
		}
		hash[key].push(city);
		return hash;
	}, {});

	let currentKey = $derived(getKey(text));
	let cities = $derived(cityHash[currentKey] ?? []);

	const getCityLabel = (city: ICity) => {
		if (!city) return '';
		return `${city.name}, ${city.stateCode}, ${city.countryCode}`;
	};
</script>

<Autocomplete
	bind:value
	bind:text
	textfield$required={required}
	textfield$input$name={name}
	textfield$style={fullWidth ? 'width: 100%' : undefined}
	options={cities}
	showMenuWithNoInput={false}
	{label}
	getOptionLabel={getCityLabel}
/>
