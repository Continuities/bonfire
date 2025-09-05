<script lang="ts">
	import { _, locale } from 'svelte-i18n';
	import Paper, { Title, Content } from '@smui/paper';
	import PageTitle from '@view/PageTitle.svelte';
	import ValueList from '@view/ValorList.svelte';
	import ValorDialog from '@view/ValorDialog.svelte';
	import List, { Item, Text, PrimaryText, SecondaryText } from '@smui/list';
	import Stack from '@view/Stack.svelte';
	import { resolveText } from '$lib/i18n';
	import { getStores } from '$lib/context';

	// These stores are added in +layout.svelte
	const { valors, tools } = getStores();

	let displayingValor = $state<Model.Valor | null>(null);
	let valorList = $derived(Object.values($valors));
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
						<ValueList valors={valorList} onclick={(valor) => (displayingValor = valor)} />
					</Content>
				</Paper>
			</Stack>
		</Content>
	</Paper>

	<Paper>
		<Title>{$_('tools')}</Title>
		<Content>
			<p>{@html $_('tools_content')}</p>
			<List nonInteractive threeLine>
				{#each Object.values($tools) as tool (tool.id)}
					<Item>
						<Text>
							<PrimaryText
								><a href={tool.url} target="_blank">{resolveText(tool.name, $locale)}</a
								></PrimaryText
							>
							<SecondaryText>{resolveText(tool.description, $locale)}</SecondaryText>
						</Text>
					</Item>
				{/each}
			</List>
		</Content>
	</Paper>

	<Paper>
		<Title>{$_('network')}</Title>
		<Content>
			<p>{@html $_('network_content')}</p>
			<p>{$_('check_back_later')}</p>
		</Content>
	</Paper>
</Stack>

<ValorDialog valor={displayingValor} onclose={() => (displayingValor = null)} />

<style>
</style>
