<script lang="ts">
	import { resolveText } from '$lib/i18n';
	import Chip, { Text } from '@smui/chips';
	import { locale } from 'svelte-i18n';

	type Props = {
		valor: Model.Valor | undefined;
		onclick?: (valorId: string) => void;
	};
	let { valor, onclick }: Props = $props();
	let name = $derived(valor ? resolveText(valor.name, $locale) : '');
</script>

{#if valor}
	<Chip chip={valor} onclick={() => onclick && onclick(valor.id)}>
		{#if valor.icon}
			<span class="icon">{valor.icon}</span>
		{/if}
		<Text><span class="text">{name}</span></Text>
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
