<script lang="ts">
	import { resolveText } from '$lib/i18n/index.js';
	import Paper, { Content, Title } from '@smui/paper';
	import CommunityList from '@view/CommunityList.svelte';
	import PageTitle from '@view/PageTitle.svelte';
	import Stack from '@view/Stack.svelte';
	import { _, locale } from 'svelte-i18n';

	let { data } = $props();
	let communities = $derived(data.communities);
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
	{:else if data.location}
		<Title>
			{$_('communities_in_location', {
				values: { location: data.location }
			})}
		</Title>
	{/if}
	<Content>
		<Stack>
			<CommunityList {communities} fullWidth />
		</Stack>
	</Content>
</Paper>
