<script lang="ts">
	let { children } = $props();
</script>

<main class="container">
	{@render children?.()}
</main>

<style>
	.container {
		max-width: 90vw;
		margin: 0 auto;
		padding: 0 1rem;
		margin-bottom: 100px;
	}
</style>
