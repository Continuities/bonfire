<script lang="ts">
	import Dialog, { Header, Title, Content, Actions } from '@smui/dialog';
	import IconButton from '@smui/icon-button';

	import SvgIcon from './SvgIcon.svelte';
	import { mdiClose } from '@mdi/js';
	import { resolveText } from '$lib/i18n';
	import { locale } from 'svelte-i18n';

	type Props = {
		valor: Model.Valor | null;
		onclose?: () => void;
	};
	let { valor, onclose }: Props = $props();
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
	</Content>
</Dialog>
