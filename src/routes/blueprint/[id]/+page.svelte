<script lang="ts">
	import PageInfo from '@view/PageInfo.svelte';
	import type { PageProps } from './$types';
	import { _ } from 'svelte-i18n';
	import Stack from '@view/Stack.svelte';

	let { data }: PageProps = $props();
</script>

<PageInfo title={$_('your_blueprint')} description={$_('blueprint_description')} />

<Stack gap={1}>
	{#each data.blueprint.sections as section (section.id)}
		<div>
			<h2>{$_(`${section.id}`)}</h2>
			<p>{$_(`${section.id}_description`)}</p>
			<ul>
				{#each section.selected_tools as tool (tool)}
					<li>{tool}</li>
				{/each}
			</ul>
		</div>
	{/each}
</Stack>
