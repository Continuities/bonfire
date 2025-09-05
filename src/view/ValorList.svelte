<script lang="ts">
	import ValorChip from './ValorChip.svelte';
	import { Set } from '@smui/chips';

	type Props = {
		title?: string;
		valors: Record<Model.ValorId, Model.Valor>;
		onclick?: (valor: Model.Valor) => void;
		name?: string;
	};

	let { valors, onclick, name }: Props = $props();
	let valorIds = $derived(Object.values(valors).map((v) => v.id));
</script>

<Set chips={valorIds}>
	{#snippet chip(valorId)}
		<ValorChip
			onclick={onclick ? () => onclick(valors[valorId]) : undefined}
			valor={valors[valorId]}
		/>
	{/snippet}
</Set>

{#if name}
	<input type="hidden" {name} value={JSON.stringify(valors)} />
{/if}
