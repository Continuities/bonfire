<script lang="ts">
	import ValorChip from './ValorChip.svelte';
	import { Set } from '@smui/chips';

	type Props = {
		title?: string;
		valors: Model.Valor[];
		onclick?: (valor: Model.Valor) => void;
	};

	let { valors, onclick }: Props = $props();
	let valorIds = $derived(valors.map((v) => v.id));
	let valorMap = $derived(new Map(valors.map((v) => [v.id, v])));
</script>

<Set chips={valorIds}>
	{#snippet chip(valorId)}
		<ValorChip
			onclick={onclick ? () => onclick(valorMap.get(valorId) as Model.Valor) : undefined}
			valor={valorMap.get(valorId)}
		/>
	{/snippet}
</Set>
