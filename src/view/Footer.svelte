<script lang="ts">
	import Paper from '@smui/paper';
	import { _ } from 'svelte-i18n';
</script>

<footer class="footer mdc-elevation--z24">
	<p class="license">{@html $_('license')}</p>
</footer>

<style>
	.footer {
		position: fixed;
		bottom: 0;
		width: 100vw;
		background: var(--mdc-theme-surface);
		padding: 1rem;
	}
	.license {
		font-size: 0.75rem;
		margin: 0;
	}
</style>
