<script lang="ts">
	import { marginStyle } from '$lib/view';
	import type { Snippet } from 'svelte';

	type Props = {
		children?: Snippet;
		gap?: number;
		direction?: 'row' | 'column';
		justify?: 'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
		align?: 'start' | 'end' | 'center' | 'stretch';
	} & View.MarginProps;
	let allProps: Props = $props();

	let {
		children,
		direction = 'column',
		gap = 1,
		justify = 'start',
		align = 'stretch'
	} = $derived(allProps);
</script>

<div
	class="stack"
	class:row={direction === 'row'}
	style={`gap:${gap}rem ${marginStyle(allProps)}; justify-content: ${justify}; align-items: ${align};`}
>
	{@render children?.()}
</div>

<style>
	.stack {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	.row {
		flex-direction: row;
	}
</style>
