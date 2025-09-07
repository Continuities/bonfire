<script lang="ts">
	import Autocomplete from '@smui-extra/autocomplete';
	import { getStores } from '$lib/context';
	import Stack from '@view/Stack.svelte';
	import { _, locale } from 'svelte-i18n';
	import { resolveText } from '$lib/i18n';
	import { Text } from '@smui/list';
	import Textfield from '@smui/textfield';
	import { v4 as uuid } from 'uuid';
	import ToolTypeList from './ToolTypeList.svelte';
	import ToolTypePicker from './ToolTypePicker.svelte';

	type Props = {
		value?: Model.Tool | undefined;
	};

	let { value = $bindable() }: Props = $props();

	let { tools, toolTypes } = getStores();
	let currentTool = $state<Model.Tool | undefined>();
	let text = $state('');
	let url = $derived(currentTool?.url ?? '');
	let description = $derived((currentTool && resolveText(currentTool.description, $locale)) ?? '');
	let currentTypes = $derived(currentTool?.types ?? {});

	let options = $state(Object.values($tools));
	$effect(() => {
		if (!currentTool) {
			return;
		}
		const descriptionChanged = description !== resolveText(currentTool.description, $locale);
		const urlChanged = url !== currentTool.url;
		const newValue = { ...currentTool };
		if (descriptionChanged) {
			newValue.description = description;
		}
		if (urlChanged) {
			newValue.url = url;
		}
		value = newValue;
	});

	let pickedType = $state<Model.ToolType | undefined>();
	$effect(() => {
		if (pickedType && currentTool) {
			currentTool.types[pickedType.id] = pickedType;
			pickedType = undefined;
		}
	});
</script>

<div class="content">
	<Stack>
		<p>{$_('add_tool_dialog_content')}</p>
		<Autocomplete
			bind:value={currentTool}
			bind:text
			textfield$required
			style="width: 100%;"
			textfield$style="width: 100%;"
			{options}
			showMenuWithNoInput={true}
			noMatchesActionDisabled={false}
			onSMUIAutocompleteNoMatchesAction={() => {
				currentTool = {
					id: uuid(),
					name: text,
					url: '',
					description: '',
					types: {}
				};
				options = [...options, currentTool];
			}}
			getOptionLabel={(tool) => (tool && resolveText(tool.name, $locale)) ?? ''}
			label={$_('tool')}
		>
			{#snippet noMatches()}
				<Text>Add {text}</Text>
			{/snippet}
		</Autocomplete>
		<Textfield
			bind:value={url}
			required
			style="width: 100%;"
			helperLine$style="width: 100%;"
			disabled={!currentTool}
			label={$_('tool_url')}
		/>
		<ToolTypePicker
			bind:value={currentTypes}
			disabled={!currentTool}
			options={Object.values($toolTypes)}
		/>
		<Textfield
			bind:value={description}
			required
			style="width: 100%;"
			helperLine$style="width: 100%;"
			input$rows={6}
			textarea
			disabled={!currentTool}
			label={$_('tool_description')}
		/>
	</Stack>
</div>

<style>
	.content {
		min-height: 300px;
	}
</style>
