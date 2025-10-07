<script lang="ts">
	import { page } from '$app/state';
	import { CommunityFilterURL } from '$lib/filter';

	type Props = {
		location: Model.Location;
	};

	let { location }: Props = $props();

	let cityFilter = $derived({
		location: {
			city: location.city,
			stateCode: location.stateCode,
			countryCode: location.countryCode
		}
	});

	let stateFilter = $derived({
		location: {
			stateCode: location.stateCode,
			countryCode: location.countryCode
		}
	});

	let countryFilter = $derived({
		location: {
			countryCode: location.countryCode
		}
	});

	let cityURL = $derived(CommunityFilterURL(cityFilter, page.url.origin));
	let stateURL = $derived(CommunityFilterURL(stateFilter, page.url.origin));
	let countryURL = $derived(CommunityFilterURL(countryFilter, page.url.origin));
</script>

<a href={cityURL.toString()} class="location-link">
	{location.city}
</a>
,
<a href={stateURL.toString()} class="location-link">
	{location.stateCode}
</a>
,
<a href={countryURL.toString()} class="location-link">
	{location.countryCode}
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
