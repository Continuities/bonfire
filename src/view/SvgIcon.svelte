<script lang="ts">
	import { Icon } from '@smui/icon-button';
	type Props = {
		path: string;
	};
	let { path }: Props = $props();
</script>

<Icon tag="svg" viewBox="0 0 24 24">
	<path fill="currentColor" d={path} />
</Icon>
