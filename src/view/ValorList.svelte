<script lang="ts">
	import Paper, { Title, Content } from '@smui/paper';
	import ValorChip from './ValorChip.svelte';
	import { Set } from '@smui/chips';

	type Props = {
		title?: string;
		valors: Model.Valor[];
		onclick?: (valor: Model.Valor) => void;
	};

	let { title, valors, onclick }: Props = $props();
	let valorIds = $derived(valors.map((v) => v.id));
	let valorMap = $derived(new Map(valors.map((v) => [v.id, v])));
</script>

<Paper variant="outlined">
	{#if title}<Title>{title}</Title>{/if}
	<Content>
		<Set chips={valorIds}>
			{#snippet chip(valorId)}
				<ValorChip {onclick} valor={valorMap.get(valorId)} />
			{/snippet}
		</Set>
	</Content>
</Paper>
