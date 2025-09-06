<script lang="ts">
	type Props = {
		tools: Record<Model.ToolId, Model.Tool>;
		name?: string;
	};
	let { tools }: Props = $props();
</script>

<div>[TODO] {JSON.stringify(tools)}</div>
