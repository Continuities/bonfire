<script lang="ts">
	import { resolveText } from '$lib/i18n/index.js';
	import { locationToString } from '$lib/location.js';
	import Paper, { Content, Title } from '@smui/paper';
	import CommunityFilters from '@view/CommunityFilters.svelte';
	import CommunityList from '@view/CommunityList.svelte';
	import PageTitle from '@view/PageTitle.svelte';
	import Stack from '@view/Stack.svelte';
	import { _, locale } from 'svelte-i18n';
	import { goto } from '$app/navigation';
	import { CommunityFilterURL } from '$lib/filter.js';
	import { page } from '$app/state';

	let { data } = $props();
	let communities = $derived(data.communities);
	let filter = $derived(data.filter);

	const onFilterChange = (newFilter: Filter.CommunityFilter) => {
		const url = CommunityFilterURL(newFilter, page.url.origin);
		goto(url);
	};
</script>

<PageTitle title={$_('community_network')} />

<Paper>
	{#if data.tool}
		<Title>{$_('communities_using', { values: { tool: data.tool.name } })}</Title>
	{:else if data.valor}
		<Title
			>{$_('communities_upholding', {
				values: { valor: resolveText(data.valor.name, $locale) }
			})}</Title
		>
	{:else if filter.location}
		<Title>
			{$_('communities_in_location', {
				values: { location: locationToString(filter.location) }
			})}
		</Title>
	{/if}
	<Content>
		<Stack>
			<CommunityFilters {filter} onchange={onFilterChange} />
			<CommunityList {communities} fullWidth />
		</Stack>
	</Content>
</Paper>
