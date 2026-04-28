<script lang="ts">
	import Button from '@smui/button';
	import SegmentedButton, { Segment } from '@smui/segmented-button';
	import { Label } from '@smui/common';
	import PageInfo from '@view/PageInfo.svelte';
	import Stack from '@view/Stack.svelte';
	import { _ } from 'svelte-i18n';
	import ToolsList from '@view/ToolsList.svelte';
	import { getStores } from '$lib/context';

	const BLUEPRINT_QUESTIONS: Blueprint.BlueprintQuestion[] = [
		{
			section: 'land',
			question: 'land_question',
			description: 'land_description',
			related_tool: 'event-training',
			allow_many_tools: true
		},
		{
			section: 'tickets',
			question: 'tickets_question',
			description: 'tickets_description',
			related_tool: 'ticketing',
			tool_required: true
		},
		{
			section: 'volunteers',
			question: 'volunteers_question',
			description: 'volunteers_description',
			related_tool: 'volunteer_management',
			tool_required: true
		}
	];

	const submitAnswer = () => {
		if (currentAnswer === 'yes') {
			const question = BLUEPRINT_QUESTIONS[currentQuestionIndex];
			blueprintSections[currentQuestionIndex] = {
				id: question.section,
				selected_tools: currentTools
			};
		} else {
			blueprintSections[currentQuestionIndex] = null;
		}
		if (currentQuestionIndex < BLUEPRINT_QUESTIONS.length - 1) {
			currentQuestionIndex++;
			currentAnswer = undefined;
		}
	};

	const goBack = () => {
		currentQuestionIndex--;
		currentAnswer = blueprintSections[currentQuestionIndex] ? 'yes' : 'no';
	};

	let { tools } = getStores();

	let currentQuestionIndex = $state<number>(-1);
	let currentAnswer = $state<'yes' | 'no' | undefined>();
	let blueprintSections = $state<Array<Blueprint.BlueprintSection | null>>([]);

	let currentQuestion = $derived(BLUEPRINT_QUESTIONS[currentQuestionIndex]);
	let currentTools = $derived(blueprintSections[currentQuestionIndex]?.selected_tools ?? []);
	let relatedTools = $derived(
		currentQuestion?.related_tool
			? Object.fromEntries(
					Object.entries($tools).filter(([, tool]) => tool.types[currentQuestion.related_tool!])
				)
			: ({} as Record<Model.ToolId, Model.Tool>)
	);
	let submitDisabled = $derived(
		currentQuestionIndex < 0 ||
			currentAnswer === undefined ||
			(currentAnswer === 'yes' && currentQuestion?.tool_required && currentTools.length === 0)
	);
</script>

<PageInfo title={$_('start_an_event')} description={$_('start_an_event_description')} />
<Stack gap={3}>
	{#if currentQuestionIndex === -1}
		<p>{$_('start_an_event_description')}</p>
		<Stack direction="row" justify="start" gap={1}>
			<Button variant="raised" onclick={() => (currentQuestionIndex = 0)}>{$_('start')}</Button>
		</Stack>
	{:else}
		<Stack gap={0}>
			<p style="font-weight:bold">{$_(currentQuestion.question)}</p>
			<SegmentedButton segments={['yes', 'no']} singleSelect bind:selected={currentAnswer}>
				{#snippet segment(segment)}
					<Segment {segment}>
						<Label>{$_(segment)}</Label>
					</Segment>
				{/snippet}
			</SegmentedButton>
			{#if currentAnswer === 'yes'}
				<p>{$_(currentQuestion.description)}</p>
				<p>{$_(currentQuestion.allow_many_tools ? 'here_are_some' : 'here_are_some_single')}</p>
				{#if currentQuestion.related_tool}
					<ToolsList
						tools={relatedTools}
						select
						multiselect={currentQuestion.allow_many_tools}
						fullWidth
						bind:selected={currentTools}
					/>
				{/if}
			{/if}
		</Stack>
		<Stack direction="row" justify="start" gap={1}>
			<Button
				variant="raised"
				color="secondary"
				onclick={goBack}
				disabled={currentQuestionIndex <= 0}>{$_('back')}</Button
			>
			{#if currentQuestionIndex < BLUEPRINT_QUESTIONS.length - 1}
				<Button variant="raised" onclick={submitAnswer} disabled={submitDisabled}
					>{$_('next')}</Button
				>
			{:else}
				<form method="POST">
					<input
						type="hidden"
						name="sections"
						value={JSON.stringify(blueprintSections.filter(Boolean))}
					/>
					<Button variant="raised" type="submit" onclick={submitAnswer} disabled={submitDisabled}
						>{$_('finish')}</Button
					>
				</form>
			{/if}
		</Stack>
	{/if}
</Stack>
