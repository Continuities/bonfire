<script lang="ts">
	import Paper, { Content } from '@smui/paper';
	import PageTitle from '@view/PageTitle.svelte';
	import { _ } from 'svelte-i18n';
</script>

<PageTitle title={$_('login_error')} />

<Paper>
	<Content>
		<p>{@html $_('login_error_content')}</p>
	</Content>
</Paper>
