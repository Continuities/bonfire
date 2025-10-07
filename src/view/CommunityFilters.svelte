<script lang="ts">
	import { _ } from 'svelte-i18n';
	import LocationPicker from './LocationPicker.svelte';
	import Stack from './Stack.svelte';
	import { locationsEqual } from '$lib/location';
	import ToolPicker from './ToolPicker.svelte';
	import { getStores } from '$lib/context';

	type Props = {
		filter: Filter.CommunityFilter;
		onchange: (filter: Filter.CommunityFilter) => void;
	};
	let { filter, onchange }: Props = $props();
	let { tools } = getStores();
	let location = $derived(filter.location);
	let uses_tool = $derived(filter.uses_tool ? $tools[filter.uses_tool] : undefined);

	$effect(() => {
		if (!locationsEqual(location, filter.location)) {
			onchange({ ...filter, location });
		}
		if (uses_tool?.id !== filter.uses_tool) {
			onchange({ ...filter, uses_tool: uses_tool?.id });
		}
	});
</script>

<Stack direction="row">
	<LocationPicker cities states countries label={$_('location_filter')} bind:value={location} />
	<ToolPicker label={$_('tool_filter')} bind:value={uses_tool} />
</Stack>

<style>
</style>
