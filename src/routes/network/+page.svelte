<script lang="ts">
	import Paper, { Content } from '@smui/paper';
	import CommunityList from '@view/CommunityList.svelte';
	import PageTitle from '@view/PageTitle.svelte';
	import { _ } from 'svelte-i18n';
	import { writable } from 'svelte/store';

	let { data } = $props();
	let communities = writable(data.communities);
</script>

<PageTitle title={$_('community_network')} />

<Paper>
	<Content>
		<CommunityList communities={$communities} fullWidth />
	</Content>
</Paper>
