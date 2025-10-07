<script lang="ts">
	import Autocomplete from '@smui-extra/autocomplete';
	import { getStores } from '$lib/context';
	import Stack from '@view/Stack.svelte';
	import { _, locale } from 'svelte-i18n';
	import { defaultLocale, resolveText } from '$lib/i18n';
	import { Text } from '@smui/list';
	import Textfield from '@smui/textfield';
	import { v4 as uuid } from 'uuid';
	import EmojiPicker from './EmojiPicker.svelte';

	type Props = {
		label: string;
		value: Model.Valor | undefined;
		editable?: boolean | undefined;
		required?: boolean | undefined;
		fullWidth?: boolean | undefined;
	};

	let { value = $bindable(), label, editable, required, fullWidth }: Props = $props();
	let style = $derived(fullWidth ? 'width: 100%;' : undefined);
	let { valors } = getStores();
	let currentValor = $state<Model.Valor | undefined>(value);
	let text = $derived(currentValor ? resolveText(currentValor.name, $locale) : '');
	let currentDescription = $derived(
		(currentValor && resolveText(currentValor.description, $locale)) ?? ''
	);
	let description = $derived(currentDescription);
	let currentIcon = $derived(currentValor?.icon ?? '');

	let options = $state(Object.values($valors));
	let localKey = $derived($locale ?? defaultLocale);
	$effect(() => {
		if (!currentValor) {
			if (!editable) {
				value = undefined;
			}
			return;
		}
		value = {
			...currentValor,
			icon: currentIcon,
			description: { ...currentValor.description, [localKey]: description }
		};
	});
</script>

<Stack>
	<Autocomplete
		bind:value={currentValor}
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
			currentValor = {
				id: uuid(),
				name: { [localKey]: text },
				icon: '',
				description: { [localKey]: '' }
			};
			options = [...options, currentValor];
		}}
		getOptionLabel={(valor) => (valor && resolveText(valor.name, $locale)) ?? ''}
		{label}
	>
		{#snippet noMatches()}
			{#if editable}
				<Text>{$_('add_text', { values: { text } })}</Text>
			{/if}
		{/snippet}
	</Autocomplete>
	{#if editable}
		<EmojiPicker label={$_('valor_icon')} bind:value={currentIcon} />
		<Textfield
			bind:value={description}
			required
			{style}
			helperLine$style={style}
			input$rows={6}
			textarea
			disabled={!currentValor}
			label={$_('valor_description')}
		/>
	{/if}
</Stack>
