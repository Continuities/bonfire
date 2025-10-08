<script lang="ts">
	import Paper, { Content } from '@smui/paper';
	import PageInfo from '@view/PageInfo.svelte';
	import { _ } from 'svelte-i18n';
</script>

<PageInfo title={$_('login_error')} description={$_('bonfire_description')} />

<Paper>
	<Content>
		<p>{@html $_('login_error_content')}</p>
	</Content>
</Paper>
