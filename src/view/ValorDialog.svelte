<script lang="ts">
	import Dialog, { Header, Title, Content, Actions } from '@smui/dialog';
	import IconButton from '@smui/icon-button';

	import SvgIcon from './SvgIcon.svelte';
	import { mdiClose } from '@mdi/js';

	type Props = {
		valor: Model.Valor | null;
		onclose?: () => void;
	};
	let { valor, onclose }: Props = $props();
</script>

<Dialog open={valor !== null} fullscreen onSMUIDialogClosed={onclose}>
	<Header>
		<Title>{valor?.name}</Title>
		<IconButton action="close" class="material-icons">
			<SvgIcon path={mdiClose} />
		</IconButton>
	</Header>
	<Content>
		{#if valor}
			<p>{@html valor.description}</p>
		{/if}
	</Content>
</Dialog>
