<script lang="ts">
	import { _ } from 'svelte-i18n';
</script>

<footer class="footer mdc-elevation--z24">
	<p class="license">{@html $_('license')}</p>
</footer>

<style>
	.footer {
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
