<script lang="ts">
	import { resolveText } from '$lib/i18n';
	import Chip, { Text } from '@smui/chips';
	import { locale } from 'svelte-i18n';

	type Props = {
		toolType: Model.ToolType;
		onclick?: (toolType: Model.ToolTypeId) => void;
	};
	let { toolType, onclick }: Props = $props();
	let name = $derived(toolType ? resolveText(toolType.name, $locale) : '');
</script>

<Chip chip={toolType} onclick={() => onclick && onclick(toolType.id)}>
	{#if toolType.icon}
		<span class="icon">{toolType.icon}</span>
	{/if}
	<Text><span class="text">{name}</span></Text>
</Chip>

<style>
	.icon {
		font-size: 20px;
	}
	.text {
		margin-left: 0.5rem;
	}
</style>
