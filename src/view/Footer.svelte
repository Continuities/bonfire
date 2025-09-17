<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { mdiGithub } from '@mdi/js';
	import SvgIcon from './SvgIcon.svelte';
	import Stack from './Stack.svelte';
</script>

<footer class="footer mdc-elevation--z24">
	<Stack gap={0}>
		<p>{@html $_('footer_content')}</p>
		<p class="license">{@html $_('license')}</p>
	</Stack>
	<a href="https://github.com/Continuities/bonfire" target="_blank" class="github"
		><SvgIcon path={mdiGithub} /></a
	>
</footer>

<style>
	.footer {
		bottom: 0;
		width: 100vw;
		background: var(--mdc-theme-surface);
		padding: 1rem 2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.license {
		font-size: 0.75rem;
		margin: 0;
	}
	.github {
		display: block;
		width: 24px;
	}
</style>
