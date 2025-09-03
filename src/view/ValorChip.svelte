<script lang="ts">
	import Chip, { Text } from '@smui/chips';
	import type { MouseEventHandler } from 'svelte/elements';
	type Props = {
		valor: Model.Valor | undefined;
		onclick?: (valor: Model.Valor) => void;
	};
	let { valor, onclick }: Props = $props();
</script>

{#if valor}
	<Chip chip={valor} onclick={() => onclick && onclick(valor)}>
		{#if valor.icon}
			<span class="icon">{valor.icon}</span>
		{/if}
		<Text><span class="text">{valor.name}</span></Text>
	</Chip>
{/if}

<style>
	.icon {
		font-size: 20px;
	}
	.text {
		margin-left: 0.5rem;
	}
</style>
