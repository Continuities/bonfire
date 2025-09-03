import { readable } from 'svelte/store';

/* TODO: Constant for now, but eventually move into a database to
 *       support community-sourced additions and edits. */
export default readable<Model.Valor[]>([
	{
		id: 'diversity',
		name: { en: 'Diversity', fr: 'Diversité' },
		description: {
			en: 'We embrace and celebrate the unique backgrounds, perspectives, and experiences of all individuals within our community.',
			fr: 'Nous embrassons et célébrons les origines, perspectives et expériences uniques de chaque individu au sein de notre communauté.'
		},
		icon: '🌈'
	},
	{
		id: 'expression',
		name: { en: 'Expression', fr: 'Expression' },
		description: {
			en: 'We encourage and support the free and authentic expression of ideas, identities, and creativity.',
			fr: "Nous encourageons et soutenons l'expression libre et authentique des idées, des identités et de la créativité."
		},
		icon: '🎭'
	},
	{
		id: 'anarchy',
		name: { en: 'Anarchy', fr: 'Anarchie' },
		description: {
			en: 'We challenge traditional structures and hierarchies, promoting self-governance and collective decision-making.',
			fr: "Nous remettons en question les structures et hiérarchies traditionnelles, en promouvant l'autogouvernance et la prise de décision collective."
		},
		icon: '🖤'
	},
	{
		id: 'belonging',
		name: { en: 'Belonging', fr: 'Appartenance' },
		description: {
			en: 'We foster a sense of community and inclusion, ensuring that everyone feels valued and accepted.',
			fr: "Nous favorisons un sentiment de communauté et d'inclusion, en veillant à ce que chacun se sente valorisé et accepté."
		},
		icon: '🤝'
	},
	{
		id: 'sustainability',
		name: { en: 'Sustainability', fr: 'Durabilité' },
		description: {
			en: 'We are committed to environmental stewardship and practices that promote the health and longevity of our planet.',
			fr: 'Nous nous engageons en faveur de la gestion environnementale et des pratiques qui favorisent la santé et la longévité de notre planète.'
		},
		icon: '🌿'
	},
	{
		id: 'equity',
		name: { en: 'Equity', fr: 'Équité' },
		description: {
			en: 'We strive to create a fair and just environment where resources and opportunities are accessible to all.',
			fr: 'Nous nous efforçons de créer un environnement équitable et juste où les ressources et les opportunités sont accessibles à tous.'
		},
		icon: '⚖️'
	},
	{
		id: 'justice',
		name: { en: 'Justice', fr: 'Justice' },
		description: {
			en: 'We advocate for social justice and work to dismantle systems of oppression and inequality.',
			fr: "Nous plaidons en faveur de la justice sociale et travaillons à démanteler les systèmes d'oppression et d'inégalité."
		},
		icon: '✊'
	},
	{
		id: 'mentorship',
		name: { en: 'Mentorship', fr: 'Mentorat' },
		description: {
			en: 'We value the guidance and support of experienced individuals to help others grow and succeed.',
			fr: 'Nous valorisons les conseils et le soutien des personnes expérimentées pour aider les autres à grandir et à réussir.'
		},
		icon: '🌟'
	},
	{
		id: 'sharing',
		name: { en: 'Sharing', fr: 'Partage' },
		description: {
			en: 'We believe in the power of sharing resources, knowledge, and experiences to enrich our community.',
			fr: 'Nous croyons au pouvoir du partage des ressources, des connaissances et des expériences pour enrichir notre communauté.'
		},
		icon: '🤲'
	},
	{
		id: 'initiative',
		name: { en: 'Initiative', fr: 'Initiative' },
		description: {
			en: 'We encourage proactive engagement and the pursuit of new ideas and projects that benefit our community.',
			fr: "Nous encourageons l'engagement proactif et la poursuite de nouvelles idées et projets qui bénéficient à notre communauté."
		},
		icon: '🚀'
	}
]);
