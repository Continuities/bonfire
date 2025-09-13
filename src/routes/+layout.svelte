<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import Container from '@view/Container.svelte';
	import Footer from '@view/Footer.svelte';
	import LanguageToggle from '@view/LanguageToggle.svelte';
	import WIPOverlay from '@view/WIPOverlay.svelte';
	import type { LayoutProps } from './$types';
	import idstore from '$lib/id-store';
	import { setStores } from '$lib/context';
	import { writable } from 'svelte/store';
	import { onMount } from 'svelte';
	import { invalidate, goto } from '$app/navigation';
	import AccountWidget from '@view/AccountWidget.svelte';

	let { children, data }: LayoutProps = $props();
	let { session, supabase } = $derived(data);

	const valorStore = idstore<Model.Valor>((data as { valors: Model.Valor[] })?.valors ?? []);
	const toolStore = idstore<Model.Tool>((data as { tools: Model.Tool[] })?.tools ?? []);
	const toolTypeStore = writable<Record<Model.ToolTypeId, Model.ToolType>>(
		(data as { toolTypes: Record<Model.ToolTypeId, Model.ToolType> })?.toolTypes ?? {}
	);
	setStores({ valors: valorStore, tools: toolStore, toolTypes: toolTypeStore });

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange(() => {
			invalidate('supabase:auth');
		});
		return () => data.subscription.unsubscribe();
	});

	const logout = async () => {
		await supabase.auth.signOut();
	};
	const login = async () => {
		goto('/auth');
	};
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
	<AccountWidget {session} {login} {logout} />
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
