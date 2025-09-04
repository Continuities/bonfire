<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import Container from '@view/Container.svelte';
	import Footer from '@view/Footer.svelte';
	import LanguageToggle from '@view/LanguageToggle.svelte';
	import WIPOverlay from '@view/WIPOverlay.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<!-- SMUI Styles -->
	<link rel="stylesheet" href="/smui.css" media="(prefers-color-scheme: light)" />
	<link rel="stylesheet" href="/smui-dark.css" media="screen and (prefers-color-scheme: dark)" />
	<style>
		html {
			box-sizing: border-box;
		}
		*,
		*:before,
		*:after {
			box-sizing: inherit;
		}
		body {
			margin: 0;
			overflow-x: hidden;
			width: 100vw;
		}
	</style>
</svelte:head>

<div class="top-right">
	<LanguageToggle />
</div>

<div class="wrapper">
	<Container>
		{@render children?.()}
	</Container>

	<Footer />
</div>

<WIPOverlay />

<style>
	.top-right {
		position: absolute;
		top: 1rem;
		right: 1rem;
		z-index: 1000;
	}
	.wrapper {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
</style>
