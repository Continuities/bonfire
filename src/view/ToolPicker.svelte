<script lang="ts">
	import Autocomplete from '@smui-extra/autocomplete';
	import { getStores } from '$lib/context';
	import Stack from '@view/Stack.svelte';
	import { _, locale } from 'svelte-i18n';
	import { defaultLocale, resolveText } from '$lib/i18n';
	import { Text } from '@smui/list';
	import Textfield from '@smui/textfield';
	import { v4 as uuid } from 'uuid';
	import ToolTypePicker from './ToolTypePicker.svelte';

	type Props = {
		label: string;
		value: Model.Tool | null | undefined;
		editable?: boolean | undefined;
		required?: boolean | undefined;
		fullWidth?: boolean | undefined;
	};

	let { value = $bindable(), label, editable, required, fullWidth }: Props = $props();

	let { tools, toolTypes } = getStores();
	let currentTool = $state<Model.Tool | undefined>(value ?? undefined);
	let text = $derived(currentTool?.name ?? '');
	let url = $derived(currentTool?.url ?? '');
	let description = $derived((currentTool && resolveText(currentTool.description, $locale)) ?? '');
	let currentTypes = $derived(currentTool?.types ?? {});
	let localeKey = $derived($locale ?? defaultLocale);
	let style = $derived(fullWidth ? 'width: 100%;' : undefined);

	let options = $state(Object.values($tools));
	$effect(() => {
		if (!currentTool) {
			if (!editable) {
				value = null;
			}
			return;
		}
		const descriptionChanged = description !== resolveText(currentTool.description, $locale);
		const urlChanged = url !== currentTool.url;
		const newValue = { ...currentTool };
		if (descriptionChanged) {
			newValue.description[localeKey] = description;
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

<Stack>
	<Autocomplete
		bind:value={currentTool}
		bind:text
		textfield$required={required}
		{style}
		textfield$style={style}
		{options}
		showMenuWithNoInput={true}
		noMatchesActionDisabled={!editable}
		onSMUIAutocompleteNoMatchesAction={() => {
			if (!editable) {
				return;
			}
			currentTool = {
				id: uuid(),
				name: text,
				url: '',
				description: { [localeKey]: '' },
				types: {}
			};
			options = [...options, currentTool];
		}}
		getOptionLabel={(tool) => tool.name ?? ''}
		{label}
	>
		{#snippet noMatches()}
			{#if editable}
				<Text>{$_('add_text', { values: { text } })}</Text>
			{/if}
		{/snippet}
	</Autocomplete>
	{#if editable}
		<Textfield
			bind:value={url}
			required
			{style}
			helperLine$style={style}
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
			{style}
			helperLine$style={style}
			input$rows={6}
			textarea
			disabled={!currentTool}
			label={$_('tool_description')}
		/>
	{/if}
</Stack>
