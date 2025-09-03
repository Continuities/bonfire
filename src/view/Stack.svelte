<script lang="ts">
	import { marginStyle } from '$lib/view';
	import type { Snippet } from 'svelte';

	type Props = {
		children?: Snippet;
		gap?: number;
		direction?: 'row' | 'column';
	} & View.MarginProps;
	let allProps: Props = $props();

	let { children, direction = 'column', gap = 1 } = $derived(allProps);
</script>

<div class="stack" class:row={direction === 'row'} style={`gap:${gap}rem ${marginStyle(allProps)}`}>
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
