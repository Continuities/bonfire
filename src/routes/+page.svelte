<script lang="ts">
	import { _ } from 'svelte-i18n';
	import Paper, { Title, Content } from '@smui/paper';
	import PageTitle from '@view/PageTitle.svelte';
	import ValueList from '@view/ValorList.svelte';
	import ValorDialog from '@view/ValorDialog.svelte';
	import Stack from '@view/Stack.svelte';
	import { getStores } from '$lib/context';
	import ToolsList from '@view/ToolsList.svelte';
	import CommunityList from '@view/CommunityList.svelte';
	import Button from '@smui/button';

	// These stores are added in +layout.svelte
	const { valors, tools } = getStores();

	let { data } = $props();
	let displayingValor = $state<Model.Valor | null>(null);
</script>

<PageTitle title={$_('the_openburn_project')} />

<Stack gap={2}>
	<Paper>
		<Title>{$_('did_you_know')}</Title>
		<Content>
			<p>{@html $_('did_you_know_content')}</p>
		</Content>
	</Paper>

	<Paper>
		<Title>{$_('the_openburn_project')}</Title>
		<Content>
			<p>{@html $_('what_is_openburn_content')}</p>
			<p>{@html $_('community_needs')}</p>
		</Content>
	</Paper>

	<Paper>
		<Title>{$_('communal_values')}</Title>
		<Content>
			<Stack>
				<div>
					<p>{@html $_('communal_values_description')}</p>
					<p>{@html $_('value_realignment')}</p>
				</div>
				<Paper variant="outlined">
					<Title>{$_('some_we_like')}</Title>
					<Content>
						<ValueList valors={$valors} onclick={(valor) => (displayingValor = valor)} />
					</Content>
				</Paper>
			</Stack>
		</Content>
	</Paper>

	<Paper>
		<Title>{$_('tools')}</Title>
		<Content>
			<Stack>
				<p>{@html $_('tools_content')}</p>
				<ToolsList tools={$tools} fullWidth />
				<Button style="align-self:flex-end" href="/tools">{$_('see_all')}</Button>
			</Stack>
		</Content>
	</Paper>

	<Paper>
		<Title>{$_('network')}</Title>
		<Content>
			<Stack>
				<p>{@html $_('network_content')}</p>
				<CommunityList communities={data.network} fullWidth />
				<Button style="align-self:flex-end" href="/network">{$_('see_all')}</Button>
			</Stack>
		</Content>
	</Paper>
</Stack>

<ValorDialog valor={displayingValor} onclose={() => (displayingValor = null)} />

<style>
</style>
