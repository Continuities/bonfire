<script lang="ts">
	import type { ICity } from 'country-state-city';
	import { page } from '$app/state';
	import { CommunityFilterURL, locationFromFilter } from '$lib/filter';

	type Props = {
		location: ICity;
	};

	let { location }: Props = $props();

	let cityFilter = $derived({
		city: location.name,
		stateCode: location.stateCode,
		countryCode: location.countryCode
	});

	let stateFilter = $derived({
		stateCode: location.stateCode,
		countryCode: location.countryCode
	});

	let countryFilter = $derived({
		countryCode: location.countryCode
	});

	let cityURL = $derived(CommunityFilterURL(cityFilter, page.url.origin));
	let stateURL = $derived(CommunityFilterURL(stateFilter, page.url.origin));
	let countryURL = $derived(CommunityFilterURL(countryFilter, page.url.origin));
</script>

<a href={cityURL.toString()} class="location-link">
	{cityFilter.city}
</a>
,
<a href={stateURL.toString()} class="location-link">
	{stateFilter.stateCode}
</a>
,
<a href={countryURL.toString()} class="location-link">
	{countryFilter.countryCode}
</a>

<style>
	.location-link {
		color: var(--color-primary);
		text-decoration: none;
	}
	.location-link:hover {
		text-decoration: underline;
	}
</style>
