<script lang="ts">
	import type { ICity } from 'country-state-city';
	import { toString } from '$lib/city';

	type Props = {
		location: ICity;
	};

	let { location }: Props = $props();
</script>

<!-- TODO: make this a link -->
{toString(location)}
