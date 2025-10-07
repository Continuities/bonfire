<script lang="ts">
	import Paper, { Content, Title } from '@smui/paper';
	import CommunityFilters from '@view/CommunityFilters.svelte';
	import CommunityList from '@view/CommunityList.svelte';
	import PageTitle from '@view/PageTitle.svelte';
	import Stack from '@view/Stack.svelte';
	import { _ } from 'svelte-i18n';
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
	<Content>
		<Stack>
			<CommunityFilters {filter} onchange={onFilterChange} />
			<CommunityList {communities} fullWidth />
		</Stack>
	</Content>
</Paper>
