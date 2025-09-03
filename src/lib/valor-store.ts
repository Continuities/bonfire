import { readable } from 'svelte/store';

/* TODO: Constant for now, but eventually move into a database to
 *       support community-sourced additions and edits. */
export default readable<Model.Valor[]>([
	{
		id: 'diversity',
		name: 'Diversity',
		description:
			'We embrace and celebrate the unique backgrounds, perspectives, and experiences of all individuals within our community.',
		icon: '🌈'
	},
	{
		id: 'expression',
		name: 'Expression',
		description:
			'We encourage and support the free and authentic expression of ideas, identities, and creativity.',
		icon: '🎭'
	},
	{
		id: 'anarchy',
		name: 'Anarchy',
		description:
			'We challenge traditional structures and hierarchies, promoting self-governance and collective decision-making.',
		icon: '🖤'
	},
	{
		id: 'belonging',
		name: 'Belonging',
		description:
			'We foster a sense of community and inclusion, ensuring that everyone feels valued and accepted.',
		icon: '🤝'
	},
	{
		id: 'sustainability',
		name: 'Sustainability',
		description:
			'We are committed to environmental stewardship and practices that promote the health and longevity of our planet.',
		icon: '🌿'
	},
	{
		id: 'equity',
		name: 'Equity',
		description:
			'We strive to create a fair and just environment where resources and opportunities are accessible to all.',
		icon: '⚖️'
	},
	{
		id: 'justice',
		name: 'Justice',
		description:
			'We advocate for social justice and work to dismantle systems of oppression and inequality.',
		icon: '✊'
	},
	{
		id: 'mentorship',
		name: 'Mentorship',
		description:
			'We value the guidance and support of experienced individuals to help others grow and succeed.',
		icon: '🌟'
	},
	{
		id: 'sharing',
		name: 'Sharing',
		description:
			'We believe in the power of sharing resources, knowledge, and experiences to enrich our community.',
		icon: '🤲'
	},
	{
		id: 'initiative',
		name: 'Initiative',
		description:
			'We encourage proactive engagement and the pursuit of new ideas and projects that benefit our community.',
		icon: '🚀'
	}
]);
