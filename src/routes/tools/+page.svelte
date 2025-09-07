<script lang="ts">
	import { getStores } from '$lib/context';
	import Paper, { Content } from '@smui/paper';
	import PageTitle from '@view/PageTitle.svelte';
	import ToolsList from '@view/ToolsList.svelte';
	import { _ } from 'svelte-i18n';

	let { tools } = getStores();
</script>

<PageTitle title={$_('tools')} />

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
