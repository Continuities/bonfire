<script lang="ts">
	import Paper, { Content, Title } from '@smui/paper';
	import FormField from '@smui/form-field';
	import Button from '@smui/button';
	import TextField from '@smui/textfield';
	import { _ } from 'svelte-i18n';
	import PageTitle from '@view/PageTitle.svelte';
	import Stack from '@view/Stack.svelte';
	import SvgIcon from '@view/SvgIcon.svelte';
	import { mdiPlus } from '@mdi/js';
	import Fab from '@smui/fab';
	import type { MouseEventHandler } from 'svelte/elements';
	import ValorList from '@view/ValorList.svelte';
	import { v4 as uuid } from 'uuid';

	let chosenValors = $state<Record<Model.ValorId, Model.Valor>>({});

	const addValorClicked: MouseEventHandler<HTMLButtonElement> = (e) => {
		console.log('[TODO] Add Valor Dialog');
		e.preventDefault();
		const newValor: Model.Valor = {
			id: uuid(),
			name: 'NEW_VALOR',
			description: 'NEW_VALOR_DESCRIPTION'
		};
		chosenValors[newValor.id] = newValor;
		return false;
	};
</script>

<PageTitle title={$_('join_the_network')} />

<form class="register-form" method="POST" action="./">
	<Stack gap={2}>
		<Paper>
			<Title>{$_('basic_info')}</Title>
			<Content>
				<p>{@html $_('basic_info_content')}</p>
				<Stack gap={1}>
					<TextField input$name="name" label={$_('community_name')} required value="" />
					<TextField
						input$name="description"
						label={$_('community_description')}
						required
						value=""
					/>
					<TextField input$name="url" label={$_('community_website')} value="" />
				</Stack>
			</Content>
		</Paper>

		<Paper>
			<Title>{$_('communal_values')}</Title>
			<Content>
				<p>{@html $_('communal_values_description')}</p>
				<ValorList valors={chosenValors} name="valors" />
				<div class="centered">
					<Fab color="secondary" onclick={addValorClicked}>
						<SvgIcon path={mdiPlus} />
					</Fab>
				</div>
			</Content>
		</Paper>

		<Button type="submit" variant="raised">{$_('register_community')}</Button>
	</Stack>
</form>

<style>
	.register-form {
		display: flex;
		flex-direction: column;
		padding: 1rem;
		gap: 1rem;
	}
	.centered {
		display: flex;
		justify-content: center;
	}
</style>
