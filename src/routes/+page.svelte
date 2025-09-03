<script lang="ts">
	import { _ } from 'svelte-i18n';
	import Paper, { Title, Content } from '@smui/paper';
	import PageTitle from '@view/PageTitle.svelte';
	import ValueList from '@view/ValorList.svelte';
	import ValorDialog from '@view/ValorDialog.svelte';
	import Stack from '@view/Stack.svelte';
	import valors from '$lib/valor-store';

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
				<p>{@html $_('communal_values_description')}</p>
				<ValueList
					title={$_('some_we_like')}
					valors={$valors}
					onclick={(valor) => (displayingValor = valor)}
				></ValueList>
			</Stack>
		</Content>
	</Paper>
</Stack>

<ValorDialog valor={displayingValor} onclose={() => (displayingValor = null)} />

<style>
</style>
