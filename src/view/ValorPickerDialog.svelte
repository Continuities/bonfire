<script lang="ts">
	import Dialog, { Title, Content, Actions } from '@smui/dialog';
	import Button from '@smui/button';
	import ValorPicker from '@view/ValorPicker.svelte';
	import { _ } from 'svelte-i18n';
	import type { MouseEventHandler } from 'svelte/elements';

	type Props = {
		open?: boolean;
		onSubmit?: (valor: Model.Valor) => void;
	};

	let { open = $bindable(false), onSubmit }: Props = $props();

	let currentValor = $state<Model.Valor | undefined>(undefined);

	const onAddClick: MouseEventHandler<HTMLButtonElement> = (e) => {
		if (!currentValor) {
			e.stopPropagation();
			return false;
		}
		onSubmit && onSubmit(currentValor);
	};
</script>

<Dialog bind:open surface$style="width: 850px; max-width: calc(100vw - 32px);">
	<Title>{$_('add_a_valor')}</Title>
	<Content style="min-width: 300px;">
		<ValorPicker bind:value={currentValor} />
	</Content>
	<Actions>
		<Button>{$_('cancel')}</Button>
		<Button variant="raised" color="primary" onclick={onAddClick}>{$_('add')}</Button>
	</Actions>
</Dialog>
