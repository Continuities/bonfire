<script lang="ts">
	import { getStores } from '$lib/context';
	import Paper, { Content } from '@smui/paper';
	import PageInfo from '@view/PageInfo.svelte';
	import ToolsList from '@view/ToolsList.svelte';
	import { _ } from 'svelte-i18n';

	let { tools } = getStores();
</script>

<PageInfo title={$_('tools')} description={$_('bonfire_description')} />

<Paper>
	<Content>
		<div class="container">
			<ToolsList tools={$tools} fullWidth />
		</div>
	</Content>
</Paper>

<style>
	.container {
		display: flex;
	}
</style>
