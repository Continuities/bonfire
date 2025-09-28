<script lang="ts">
	import Autocomplete from '@smui-extra/autocomplete';
	import emojis from '$lib/emojis';

	type Props = {
		value?: String | undefined;
		label?: string | undefined;
		required?: boolean | undefined;
	};

	let { value = $bindable(), label, required }: Props = $props();
</script>

<Autocomplete
	bind:value
	textfield$required={required}
	options={emojis}
	showMenuWithNoInput={true}
	{label}
/>
