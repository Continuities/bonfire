<script lang="ts">
	import { _ } from 'svelte-i18n';
	import Paper, { Title, Content } from '@smui/paper';
	import PageTitle from '@view/PageTitle.svelte';
</script>

<PageTitle title={$_('the_openburn_project')} />

<div class="list">
	<Paper>
		<Title>{$_('did_you_know')}</Title>
		<Content>
			{@html $_('did_you_know_content')}
		</Content>
	</Paper>

	<Paper>
		<Title>{$_('the_openburn_project')}</Title>
		<Content>
			{@html $_('what_is_openburn_content')}
		</Content>
	</Paper>
</div>

<style>
	.list {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
