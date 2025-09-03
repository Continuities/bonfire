<script lang="ts">
	type Props = {
		title: string;
	};
	let { title }: Props = $props();
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<h1>
	<div class="inner">
		{title}
	</div>
</h1>

<style>
	.inner {
		font-size: 4rem;
	}

	@media (min-width: 600px) {
		.inner {
			font-size: inherit;
		}
	}
</style>
