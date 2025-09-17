<script lang="ts">
	import Paper, { Content, Title } from '@smui/paper';
	import CommunityList from '@view/CommunityList.svelte';
	import PageTitle from '@view/PageTitle.svelte';
	import Stack from '@view/Stack.svelte';
	import { _ } from 'svelte-i18n';
	import { writable } from 'svelte/store';

	let { data } = $props();
	let communities = writable(data.communities);
</script>

<PageTitle title={$_('community_network')} />

<Paper>
	{#if data.tool}
		<Title>{$_('communities_using', { values: { tool: data.tool.name } })}</Title>
	{/if}
	<Content>
		<Stack>
			<CommunityList communities={$communities} fullWidth />
		</Stack>
	</Content>
</Paper>
