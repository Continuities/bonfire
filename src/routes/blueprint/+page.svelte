<script lang="ts">
	import Button from '@smui/button';
	import SegmentedButton, { Segment } from '@smui/segmented-button';
	import { Label } from '@smui/common';
	import PageInfo from '@view/PageInfo.svelte';
	import Stack from '@view/Stack.svelte';
	import { _ } from 'svelte-i18n';
	import ToolsList from '@view/ToolsList.svelte';
	import { getStores } from '$lib/context';

	const BLUEPRINT_QUESTIONS: Blueprint.BlueprintStep[] = [
		{
			title: 'question_land',
			description: 'question_land_description',
			related_tool: 'event-training',
			allow_many_tools: true
		},
		{
			title: 'question_tickets',
			description: 'question_tickets_description',
			related_tool: 'ticketing',
			tool_required: true
		}
	];

	const submitAnswer = () => {
		if (currentAnswer === 'yes') {
			const question = BLUEPRINT_QUESTIONS[currentQuestionIndex];
			blueprintSteps[currentQuestionIndex] = question;
		} else {
			blueprintSteps[currentQuestionIndex] = null;
		}
		currentQuestionIndex++;
		currentAnswer = undefined;
	};

	const goBack = () => {
		currentQuestionIndex--;
		currentAnswer = blueprintSteps[currentQuestionIndex] ? 'yes' : 'no';
	};

	let { tools } = getStores();

	let currentQuestionIndex = $state<number>(-1);
	let currentAnswer = $state<'yes' | 'no' | undefined>();
	let blueprintSteps = $state<Array<Blueprint.BlueprintStep | null>>([]);

	let currentQuestion = $derived(BLUEPRINT_QUESTIONS[currentQuestionIndex]);
	let relatedTools = $derived(
		currentQuestion?.related_tool
			? Object.fromEntries(
					Object.entries($tools).filter(([, tool]) => tool.types[currentQuestion.related_tool!])
				)
			: ({} as Record<Model.ToolId, Model.Tool>)
	);
</script>

<PageInfo title={$_('start_an_event')} description={$_('start_an_event_description')} />
<Stack gap={2}>
	{#if currentQuestionIndex === -1}
		<p>{$_('start_an_event_description')}</p>
		<Stack direction="row" justify="end" gap={1}>
			<Button onclick={() => (currentQuestionIndex = 0)}>{$_('start')}</Button>
		</Stack>
	{:else}
		<p>{$_(currentQuestion.title)}</p>
		<SegmentedButton segments={['yes', 'no']} singleSelect bind:selected={currentAnswer}>
			{#snippet segment(segment)}
				<Segment {segment}>
					<Label>{$_(segment)}</Label>
				</Segment>
			{/snippet}
		</SegmentedButton>
		{#if currentAnswer === 'yes'}
			<p>{$_(currentQuestion.description)}</p>
			{#if currentQuestion.related_tool}
				<ToolsList
					tools={relatedTools}
					select
					multiselect={currentQuestion.allow_many_tools}
					fullWidth
				/>
			{/if}
		{/if}
		<Stack direction="row" justify="end" gap={1}>
			<Button onclick={goBack} disabled={currentQuestionIndex <= 0}>{$_('back')}</Button>
			<Button
				onclick={submitAnswer}
				disabled={currentQuestionIndex >= BLUEPRINT_QUESTIONS.length - 1 ||
					currentQuestionIndex < 0 ||
					currentAnswer === undefined}
				>{$_('next')}
			</Button>
		</Stack>
	{/if}
</Stack>
