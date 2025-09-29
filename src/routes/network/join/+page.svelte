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
	import ValorPickerDialog from '@view/ValorPickerDialog.svelte';
	import ToolsList from '@view/ToolsList.svelte';
	import ToolPickerDialog from '@view/ToolPickerDialog.svelte';
	import LocationPicker from '@view/LocationPicker.svelte';

	let addValorDialogOpen = $state<boolean>(false);
	let addToolDialogOpen = $state<boolean>(false);
	let chosenValors = $state<Record<Model.ValorId, Model.Valor>>({});
	let chosenTools = $state<Record<Model.ToolId, Model.Tool>>({});

	let hasValors = $derived(Object.keys(chosenValors).length > 0);
	let hasTools = $derived(Object.keys(chosenTools).length > 0);

	const addValorClicked: MouseEventHandler<HTMLButtonElement> = (e) => {
		addValorDialogOpen = true;
		e.preventDefault();
		return false;
	};

	const addToolClicked: MouseEventHandler<HTMLButtonElement> = (e) => {
		addToolDialogOpen = true;
		e.preventDefault();
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
					<LocationPicker label={$_('community_location')} name="location" required fullWidth />
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
				<Stack>
					<p>{@html $_('communal_values_description')}</p>
					{#if hasValors}
						<ValorList valors={chosenValors} name="valors" />
					{/if}
					<div class="centered">
						<Fab color="secondary" onclick={addValorClicked}>
							<SvgIcon path={mdiPlus} />
						</Fab>
					</div>
				</Stack>
			</Content>
		</Paper>

		<Paper>
			<Title>{$_('tools')}</Title>
			<Content>
				<Stack>
					<p>{@html $_('tools_description')}</p>
					{#if hasTools}
						<ToolsList tools={chosenTools} name="tools" fullWidth />
					{/if}
					<div class="centered">
						<Fab color="secondary" onclick={addToolClicked}>
							<SvgIcon path={mdiPlus} />
						</Fab>
					</div>
				</Stack>
			</Content>
		</Paper>

		<Button type="submit" variant="raised">{$_('register_community')}</Button>
	</Stack>
</form>

{#if addValorDialogOpen}
	<ValorPickerDialog
		bind:open={addValorDialogOpen}
		onSubmit={(valor) => {
			chosenValors = { ...chosenValors, [valor.id]: valor };
			addValorDialogOpen = false;
		}}
	/>
{/if}

{#if addToolDialogOpen}
	<ToolPickerDialog
		bind:open={addToolDialogOpen}
		onSubmit={(tool) => {
			chosenTools = { ...chosenTools, [tool.id]: tool };
			addToolDialogOpen = false;
		}}
	/>
{/if}

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
	p {
		margin: 0;
	}
</style>
