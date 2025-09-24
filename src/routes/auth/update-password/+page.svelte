<script lang="ts">
	import Paper, { Title, Content } from '@smui/paper';
	import PageTitle from '@view/PageTitle.svelte';
	import { _ } from 'svelte-i18n';
	import Textfield from '@smui/textfield';
	import Button from '@smui/button';
	import Stack from '@view/Stack.svelte';
</script>

<PageTitle title={$_('update_password')} />

<Paper>
	<Title>{$_('enter_new_password')}</Title>
	<Content tag="form" method="POST" action="?/update">
		<Stack>
			<Textfield input$name="password" type="password" label={$_('password')} value="" required />
			<Textfield
				input$name="confirm"
				type="password"
				label={$_('confirm_password')}
				value=""
				required
			/>
			<Button type="submit" variant="outlined">{$_('update_password')}</Button>
		</Stack>
	</Content>
</Paper>
