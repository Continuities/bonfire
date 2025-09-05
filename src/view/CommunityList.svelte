<script lang="ts">
	import { resolveText } from '$lib/i18n';
	import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';
	import ValorList from '@view/ValorList.svelte';
	import { locale } from 'svelte-i18n';
	type Props = {
		communities: Model.Community[];
		fullWidth?: boolean;
	};
	let { communities, fullWidth }: Props = $props();
</script>

<DataTable style={fullWidth ? 'width: 100%' : undefined}>
	<Body>
		{#each communities as community (community.id)}
			<Row>
				<Cell>{resolveText(community.name, $locale)}</Cell>
				<Cell>
					<ValorList valors={community.valors} />
				</Cell>
			</Row>
		{/each}
	</Body>
</DataTable>
