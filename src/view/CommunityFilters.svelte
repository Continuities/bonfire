<script lang="ts">
	import { _ } from 'svelte-i18n';
	import LocationPicker from './LocationPicker.svelte';
	import Stack from './Stack.svelte';
	import { locationsEqual } from '$lib/location';

	type Props = {
		filter: Filter.CommunityFilter;
		onchange: (filter: Filter.CommunityFilter) => void;
	};
	let { filter, onchange }: Props = $props();
	let location = $derived(filter.location);

	$effect(() => {
		if (!locationsEqual(location, filter.location)) {
			onchange({ ...filter, location });
		}
	});
</script>

<Stack>
	<LocationPicker cities states countries label={$_('location_filter')} bind:value={location} />
</Stack>

<style>
</style>
