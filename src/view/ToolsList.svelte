<script lang="ts">
	import DataTable, { Body, Cell, Row } from '@smui/data-table';
	import ToolInfo from './ToolInfo.svelte';

	type Props = {
		tools: Record<Model.ToolId, Model.Tool>;
		fullWidth?: boolean;
		name?: string;
	};
	let { tools, name, fullWidth }: Props = $props();
</script>

<DataTable style={fullWidth ? 'width: 100%' : undefined}>
	<Body>
		{#each Object.values(tools) as tool (tool.id)}
			<Row style="height:auto;">
				<Cell>
					<ToolInfo {tool} />
				</Cell>
			</Row>
		{/each}
	</Body>
</DataTable>

{#if name}
	<input type="hidden" {name} value={JSON.stringify(tools)} />
{/if}
