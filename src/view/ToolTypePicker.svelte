<script lang="ts">
	import { resolveText } from '$lib/i18n';
	import Autocomplete from '@smui-extra/autocomplete';
	import { _, locale } from 'svelte-i18n';
	import { v4 as uuid } from 'uuid';
	import { Text } from '@smui/list';

	type Props = {
		options: Model.ToolType[];
		value?: Model.ToolType;
		disabled?: boolean;
	};
	let { options, value = $bindable(), disabled }: Props = $props();
	let text = $state(value?.name ?? '');
	let _options = $state(options);
</script>

<Autocomplete
	bind:value
	bind:text
	{disabled}
	options={_options}
	showMenuWithNoInput={true}
	noMatchesActionDisabled={false}
	onSMUIAutocompleteNoMatchesAction={() => {
		value = {
			id: uuid(),
			name: text,
			description: ''
		};
		_options = [..._options, value];
	}}
	getOptionLabel={(toolType) => (toolType && resolveText(toolType.name, $locale)) ?? ''}
	label={$_('what_kind_of_tool')}
>
	{#snippet noMatches()}
		<Text>Add "{text}"</Text>
	{/snippet}
</Autocomplete>
