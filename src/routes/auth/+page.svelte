<script lang="ts">
	import Button from '@smui/button';
	import PageTitle from '@view/PageTitle.svelte';
	import Paper, { Title, Content } from '@smui/paper';
	import Textfield from '@smui/textfield';
	import { _ } from 'svelte-i18n';
	import Stack from '@view/Stack.svelte';
</script>

<PageTitle title={$_('login_or_signup')} />
<Paper>
	<Title>{$_('enter_credentials')}</Title>
	<Content tag="form" method="POST" action="?/login">
		<Stack>
			<Textfield input$name="email" type="email" label={$_('email')} value="" required />
			<Textfield input$name="password" type="password" label={$_('password')} value="" required />
			<Button type="submit" variant="raised">{$_('log_in')}</Button>
			<Button type="submit" formaction="?/signup" variant="outlined">{$_('sign_up')}</Button>
		</Stack>
	</Content>
</Paper>
