<script lang="ts">
	import Autocomplete from '@smui-extra/autocomplete';
	import { getStores } from '$lib/context';
	import Stack from '@view/Stack.svelte';
	import { _, locale } from 'svelte-i18n';
	import { defaultLocale, resolveText } from '$lib/i18n';
	import { Text } from '@smui/list';
	import Textfield from '@smui/textfield';
	import { v4 as uuid } from 'uuid';

	type Props = {
		value?: Model.Valor | undefined;
	};

	let { value = $bindable() }: Props = $props();

	let { valors } = getStores();
	let currentValor = $state<Model.Valor | undefined>();
	let text = $state('');
	let currentDescription = $derived(
		(currentValor && resolveText(currentValor.description, $locale)) ?? ''
	);
	let description = $derived(currentDescription);

	let options = $state(Object.values($valors));
	let localKey = $derived($locale ?? defaultLocale);
	$effect(() => {
		if (currentValor && description !== currentDescription) {
			value = {
				...currentValor,
				description: { ...currentValor.description, [localKey]: description }
			};
		}
	});
</script>

<div class="content">
	<Stack>
		<p>{$_('add_valor_dialog_content')}</p>
		<Autocomplete
			bind:value={currentValor}
			bind:text
			textfield$required
			style="width: 100%;"
			textfield$style="width: 100%;"
			{options}
			showMenuWithNoInput={false}
			noMatchesActionDisabled={false}
			onSMUIAutocompleteNoMatchesAction={() => {
				currentValor = {
					id: uuid(),
					name: { [localKey]: text },
					description: { [localKey]: '' }
				};
				options = [...options, currentValor];
			}}
			getOptionLabel={(valor) => (valor && resolveText(valor.name, $locale)) ?? ''}
			label={$_('valor')}
		>
			{#snippet noMatches()}
				<Text>Add {text}</Text>
			{/snippet}
		</Autocomplete>
		<Textfield
			bind:value={description}
			required
			style="width: 100%;"
			helperLine$style="width: 100%;"
			input$rows={6}
			textarea
			disabled={!currentValor}
			label={$_('valor_description')}
		/>
	</Stack>
</div>

<style>
	.content {
		min-height: 300px;
	}
</style>
