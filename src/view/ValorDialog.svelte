<script lang="ts">
	import Dialog, { Header, Title, Content, Actions } from '@smui/dialog';
	import IconButton from '@smui/icon-button';

	import SvgIcon from './SvgIcon.svelte';
	import { mdiClose } from '@mdi/js';
	import { resolveText } from '$lib/i18n';
	import { _, locale } from 'svelte-i18n';
	import CommunityList from './CommunityList.svelte';

	type Props = {
		valor: Model.Valor | null;
		communities: Promise<Model.Community[] | null>;
		onclose?: () => void;
	};
	let { valor, communities, onclose }: Props = $props();
	let title = $derived(valor ? resolveText(valor.name, $locale) : '');
	let description = $derived(valor ? resolveText(valor.description, $locale) : '');
</script>

<Dialog open={valor !== null} fullscreen onSMUIDialogClosed={onclose}>
	<Header>
		<Title>{title}</Title>
		<IconButton action="close" class="material-icons">
			<SvgIcon path={mdiClose} />
		</IconButton>
	</Header>
	<Content>
		{#if valor}
			<p>{@html description}</p>
		{/if}
		{#await communities}
			<p>Loading...</p>
		{:then comms}
			{#if comms && comms.length > 0}
				<h6 class="with_valor">{$_('communities_upholding', { values: { valor: title } })}</h6>
				<CommunityList communities={comms} fullWidth />
			{/if}
		{/await}
	</Content>
</Dialog>

<style>
	.with_valor {
		margin: 1rem 0;
	}
</style>
