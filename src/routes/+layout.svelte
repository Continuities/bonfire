<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import Container from '@view/Container.svelte';
	import Footer from '@view/Footer.svelte';

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
		}
	</style>
</svelte:head>

<Container>
	{@render children?.()}
</Container>

<Footer />
