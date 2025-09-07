<script lang="ts">
	import Dialog, { Title, Content, Actions } from '@smui/dialog';
	import Button from '@smui/button';
	import ToolPicker from '@view/ToolPicker.svelte';
	import { _ } from 'svelte-i18n';
	import type { MouseEventHandler } from 'svelte/elements';

	type Props = {
		open?: boolean;
		onSubmit?: (valor: Model.Tool) => void;
	};

	let { open = $bindable(false), onSubmit }: Props = $props();

	let currentTool = $state<Model.Tool | undefined>(undefined);

	const onAddClick: MouseEventHandler<HTMLButtonElement> = (e) => {
		if (!currentTool?.id || !currentTool?.name || !currentTool?.url || !currentTool?.description) {
			e.stopPropagation();
			return false;
		}
		onSubmit && onSubmit(currentTool);
	};
</script>

<Dialog bind:open surface$style="width: 850px; max-width: calc(100vw - 32px);overflow:visible;">
	<Title>{$_('add_a_tool')}</Title>
	<form>
		<Content style="min-width: 300px;overflow:visible;">
			<ToolPicker bind:value={currentTool} />
		</Content>
		<Actions>
			<Button>{$_('cancel')}</Button>
			<Button variant="raised" color="primary" onclick={onAddClick}>{$_('add')}</Button>
		</Actions>
	</form>
</Dialog>
