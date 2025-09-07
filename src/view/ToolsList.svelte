<script lang="ts">
	import { resolveText } from '$lib/i18n';
	import List, { Item, Text, PrimaryText, SecondaryText } from '@smui/list';
	import { locale } from 'svelte-i18n';
	import ToolTypeList from './ToolTypeList.svelte';
	import DataTable, { Body, Cell, Row } from '@smui/data-table';
	import ValorList from './ValorList.svelte';

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
					<div class="tool-cell">
						<div class="tool-name">
							{resolveText(tool.name, $locale)}
						</div>
						<div class="tool-url">
							<a href={tool.url} target="_blank" rel="noopener">
								{tool.url}
							</a>
						</div>
						<ToolTypeList toolTypes={tool.types} />
						<div class="tool-description">
							{resolveText(tool.description, $locale)}
						</div>
					</div>
				</Cell>
			</Row>
		{/each}
	</Body>
</DataTable>

{#if name}
	<input type="hidden" {name} value={JSON.stringify(tools)} />
{/if}

<style>
	.tool-cell {
		display: flex;
		flex-direction: column;
		white-space: normal;
		gap: 1rem;
		min-height: 100px;
		padding: 1rem 0;
	}
	.tool-name {
		font-weight: bold;
		font-size: 1.5rem;
	}
	.tool-url {
		margin-top: 0.3rem;
	}
	.tool-description {
		margin-top: 1rem;
	}
</style>
