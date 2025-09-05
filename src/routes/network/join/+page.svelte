<script lang="ts">
	import Paper, { Content } from '@smui/paper';
	import FormField from '@smui/form-field';
	import Button from '@smui/button';
	import TextField from '@smui/textfield';
	import { _ } from 'svelte-i18n';
	import PageTitle from '@view/PageTitle.svelte';
</script>

<PageTitle title={$_('join_the_network')} />

<Paper>
	<Content>
		<p>{@html $_('join_network_content')}</p>
		<form class="register-form" method="POST" action="./">
			<TextField input$name="name" label={$_('community_name')} required value="" />
			<TextField input$name="description" label={$_('community_description')} required value="" />
			<TextField input$name="url" label={$_('community_website')} value="" />
			<Button type="submit" variant="raised">{$_('register_community')}</Button>
		</form>
	</Content>
</Paper>

<style>
	.register-form {
		display: flex;
		flex-direction: column;
		padding: 1rem;
		gap: 1rem;
	}
</style>
