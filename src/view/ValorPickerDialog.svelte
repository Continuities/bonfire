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
		if (!currentValor?.id || !currentValor?.name || !currentValor?.description) {
			e.stopPropagation();
			return false;
		}
		onSubmit && onSubmit(currentValor);
	};
</script>

<Dialog bind:open surface$style="width: 850px; max-width: calc(100vw - 32px);overflow:visible;">
	<Title>{$_('add_a_valor')}</Title>
	<form>
		<Content style="min-width: 300px;overflow:visible;">
			<p>{$_('add_valor_dialog_content')}</p>
			<ValorPicker label={$_('valor')} editable required fullWidth bind:value={currentValor} />
		</Content>
		<Actions>
			<Button>{$_('cancel')}</Button>
			<Button variant="raised" color="primary" onclick={onAddClick}>{$_('add')}</Button>
		</Actions>
	</form>
</Dialog>
