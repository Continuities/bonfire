<script lang="ts">
	import { _ } from 'svelte-i18n';
</script>

<div class="wip">
	{$_('work_in_progress')}
</div>

<style>
	.wip {
		position: fixed;
		top: 0;
		left: 0;
		font-size: 1rem;
		background: var(--mdc-theme-primary);
		padding: 1rem;
		opacity: 0.6;
		font-weight: bold;
	}
</style>
