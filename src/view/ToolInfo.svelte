<script lang="ts">
	import { resolveText } from '$lib/i18n';
	import { _, locale } from 'svelte-i18n';
	import ToolTypeList from './ToolTypeList.svelte';
	import Stack from './Stack.svelte';

	type Props = {
		tool: Model.Tool;
	};
	let { tool }: Props = $props();

	let usageCount = $derived((tool.used_by ?? []).length);
</script>

<div class="tool-cell">
	<Stack gap={0.3}>
		<div class="tool-name">
			{tool.name}
		</div>
		<a href={tool.url} target="_blank" rel="noopener">
			{tool.url}
		</a>
	</Stack>
	{#if usageCount > 0}
		<a class="tool-uses" href={`/network/?uses_tool=${tool.id}`}>
			{$_('used_by_count', { values: { count: usageCount } })}
		</a>
	{/if}
	<ToolTypeList toolTypes={tool.types} />
	<div class="tool-description">
		{resolveText(tool.description, $locale)}
	</div>
</div>

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
	.tool-uses {
		color: inherit;
		text-decoration: none;
	}
	.tool-uses:hover {
		text-decoration: underline;
	}
</style>
