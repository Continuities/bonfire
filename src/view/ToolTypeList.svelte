<script lang="ts">
	import ToolTypeChip from '@view/ToolTypeChip.svelte';
	import { Set } from '@smui/chips';

	type Props = {
		title?: string;
		toolTypes: Record<Model.ToolTypeId, Model.ToolType>;
		onclick?: (valor: Model.ToolType) => void;
		name?: string;
	};

	let { toolTypes, onclick, name }: Props = $props();
	let toolTypeIds = $derived(Object.values(toolTypes).map((t) => t.id));
</script>

<Set chips={toolTypeIds}>
	{#snippet chip(toolTypeId)}
		<ToolTypeChip
			onclick={onclick ? () => onclick(toolTypes[toolTypeId]) : undefined}
			toolType={toolTypes[toolTypeId]}
		/>
	{/snippet}
</Set>

{#if name}
	<input type="hidden" {name} value={JSON.stringify(toolTypes)} />
{/if}
