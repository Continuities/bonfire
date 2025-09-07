<script lang="ts">
	import ChipInput from '@smui-extra/chip-input';
	import { resolveText } from '$lib/i18n';
	import { _, locale } from 'svelte-i18n';
	import { v4 as uuid } from 'uuid';
	import { Text } from '@smui/list';
	import { mdiClose } from '@mdi/js';

	type Props = {
		options: Model.ToolType[];
		value: Record<Model.ToolTypeId, Model.ToolType>;
		disabled?: boolean;
	};
	let { options, value = $bindable(), disabled }: Props = $props();
	let text = $state('');
	let _options = $state(options);

	let chips = $derived(Object.values(value));

	const handleChipInputEntry = (event: CustomEvent<{ text: string }>) => {
		event.preventDefault();
		const newType: Model.ToolType = {
			id: uuid(),
			name: text,
			description: ''
		};
		value[newType.id] = newType;
		text = '';
	};

	const handleChipInputSelect = async (event: CustomEvent<Model.ToolType>) => {
		event.preventDefault();
		value[event.detail.id] = event.detail;
		text = '';
	};

	const handleChipInputRemove = (event: CustomEvent<{ chip: Model.ToolType }>) => {
		event.preventDefault();
		console.log(event.detail.chip.id);
		delete value[event.detail.chip.id];
	};

	const typeToText = (type: Model.ToolType) => {
		return resolveText(type?.name ?? '', $locale);
	};
</script>

<ChipInput
	bind:chips
	bind:value={text}
	autocomplete$disabled={disabled}
	textfield$disabled={disabled}
	key={(t) => t.id}
	getChipLabel={typeToText}
	getChipText={typeToText}
	chipTrailingAction$class="material-icons"
	chipTrailingAction$aria-label="Remove type"
	autocomplete$combobox
	autocomplete$options={_options}
	autocomplete$getOptionLabel={typeToText}
	autocomplete$noMatchesActionDisabled={false}
	onSMUIChipInputEntry={handleChipInputEntry}
	onSMUIChipInputSelect={handleChipInputSelect}
	onSMUIChipInputRemove={handleChipInputRemove}
>
	{#snippet chipTrailingAction()}
		<svg style="display: block;" viewBox="0 0 24 24">
			<path fill="currentColor" d={mdiClose} />
		</svg>{/snippet}
	{#snippet label()}
		{$_('what_kind_of_tool')}
	{/snippet}
	{#snippet autocomplete$noMatches()}
		<Text>Add "{text}"</Text>
	{/snippet}
</ChipInput>
