<script lang="ts">
	import { resolveText } from '$lib/i18n';
	import List, { Item, Text, PrimaryText, SecondaryText } from '@smui/list';
	import { locale } from 'svelte-i18n';

	type Props = {
		tools: Record<Model.ToolId, Model.Tool>;
		name?: string;
	};
	let { tools, name }: Props = $props();
</script>

<List nonInteractive threeLine>
	{#each Object.values(tools) as tool (tool.id)}
		<Item>
			<Text>
				<PrimaryText
					><a href={tool.url} target="_blank">{resolveText(tool.name, $locale)}</a></PrimaryText
				>
				<SecondaryText>{resolveText(tool.description, $locale)}</SecondaryText>
			</Text>
		</Item>
	{/each}
</List>

{#if name}
	<input type="hidden" {name} value={JSON.stringify(tools)} />
{/if}
