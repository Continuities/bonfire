<script lang="ts">
	import { _ } from 'svelte-i18n';
	import LocationPicker from './LocationPicker.svelte';
	import Stack from './Stack.svelte';
	import { locationsEqual } from '$lib/location';
	import ToolPicker from './ToolPicker.svelte';
	import { getStores } from '$lib/context';
	import ValorPicker from './ValorPicker.svelte';

	type Props = {
		filter: Filter.CommunityFilter;
		onchange: (filter: Filter.CommunityFilter) => void;
	};
	let { filter, onchange }: Props = $props();
	let { tools, valors } = getStores();
	let location = $derived(filter.location);
	let uses_tool = $derived(filter.uses_tool ? $tools[filter.uses_tool] : undefined);
	let with_valor = $derived(filter.with_valor ? $valors[filter.with_valor] : undefined);

	$effect(() => {
		if (!locationsEqual(location, filter.location)) {
			onchange({ ...filter, location });
		}
		if (uses_tool?.id !== filter.uses_tool) {
			onchange({ ...filter, uses_tool: uses_tool?.id });
		}
		if (with_valor?.id !== filter.with_valor) {
			onchange({ ...filter, with_valor: with_valor?.id });
		}
	});
</script>

<Stack direction="row">
	<LocationPicker cities states countries label={$_('location_filter')} bind:value={location} />
	<ValorPicker label={$_('valor_filter')} bind:value={with_valor} />
	<ToolPicker label={$_('tool_filter')} bind:value={uses_tool} />
</Stack>

<style>
</style>
