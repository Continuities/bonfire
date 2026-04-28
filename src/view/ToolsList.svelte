<script lang="ts">
	import DataTable, { Body, Cell, Row } from '@smui/data-table';
	import Checkbox from '@smui/checkbox';
	import Radio from '@smui/radio';
	import ToolInfo from './ToolInfo.svelte';
	import { _ } from 'svelte-i18n';

	type Props = {
		tools: Record<Model.ToolId, Model.Tool>;
		fullWidth?: boolean;
		name?: string;
		select?: boolean;
		multiselect?: boolean;
	};
	let { tools, name, fullWidth, select, multiselect }: Props = $props();
	let selectedTools = $state<Model.ToolId[]>([]);

	const toggle = (arr: Model.ToolId[], value: Model.ToolId) =>
		arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value];
</script>

<DataTable style={fullWidth ? 'width: 100%' : undefined}>
	<Body>
		{#if Object.keys(tools).length === 0}
			<Row>
				<Cell>{$_('nothing_yet')}</Cell>
			</Row>
		{:else}
			{#each Object.values(tools) as tool (tool.id)}
				<Row style={`height:auto;${select || multiselect ? 'cursor: pointer;' : ''}`}>
					{#if multiselect}
						<Cell>
							<Checkbox bind:group={selectedTools} value={tool.id} />
						</Cell>
					{:else if select}
						<Cell>
							<Radio bind:group={selectedTools} value={tool.id} />
						</Cell>
					{/if}
					<Cell
						onclick={() =>
							(selectedTools = multiselect ? toggle(selectedTools, tool.id) : [tool.id])}
					>
						<ToolInfo {tool} />
					</Cell>
				</Row>
			{/each}
		{/if}
	</Body>
</DataTable>

{#if name}
	<input type="hidden" {name} value={JSON.stringify(selectedTools)} />
{/if}
