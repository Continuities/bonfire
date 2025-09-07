import { mappedById } from './id-store';

export const COMMUNITIES: Model.Community[] = [];

export const VALORS: Model.Valor[] = [
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
	},
	{
		id: 'accountability',
		name: { en: 'Accountability', fr: 'Responsabilité' },
		description: {
			en: 'We hold ourselves and each other responsible for our actions and their impact on the community.',
			fr: 'Nous nous tenons responsables, nous-mêmes et les autres, de nos actions et de leur impact sur la communauté.'
		},
		icon: '📝'
	}
];

export const TOOL_TYPES = mappedById<Model.ToolTypeId, Model.ToolType>([
	{
		id: 'opensource',
		icon: '💻',
		name: { en: 'Open Source', fr: 'Open Source' },
		description: {
			en: 'The source code is available for anyone to inspect, modify, and enhance. This promotes transparency, collaboration, and community-driven development.',
			fr: "Le code source est disponible pour que chacun puisse l'inspecter, le modifier et l'améliorer. Cela favorise la transparence, la collaboration et le développement communautaire."
		}
	},
	{
		id: 'ticketing',
		icon: '🎟️',
		name: { en: 'Ticketing', fr: 'Billetterie' },
		description: {
			en: 'Tools that help manage the sale and distribution of tickets for events.',
			fr: 'Des outils qui aident à gérer la vente et la distribution de billets pour des événements.'
		}
	},
	{
		id: 'volunteer_management',
		icon: '🙋',
		name: { en: 'Volunteer Management', fr: 'Gestion des bénévoles' },
		description: {
			en: 'Tools designed to help organize, schedule, and communicate with volunteers for events or projects.',
			fr: 'Des outils conçus pour aider à organiser, planifier et communiquer avec les bénévoles pour des événements ou des projets.'
		}
	},
	{
		id: 'budgeting',
		icon: '💰',
		name: { en: 'Budgeting', fr: 'Budgétisation' },
		description: {
			en: 'Tools that facilitate the planning, allocation, and tracking of financial resources within a community or organization.',
			fr: "Des outils qui facilitent la planification, l'allocation et le suivi des ressources financières au sein d'une communauté ou d'une organisation."
		}
	},
	{
		id: 'mapping',
		icon: '🗺️',
		name: { en: 'Mapping', fr: 'Cartographie' },
		description: {
			en: 'Tools that allow for the creation and sharing of maps, often with interactive features.',
			fr: 'Des outils qui permettent la création et le partage de cartes, souvent avec des fonctionnalités interactives.'
		}
	},
	{
		id: 'democracy',
		icon: '🗳️',
		name: { en: 'Democracy', fr: 'Démocratie' },
		description: {
			en: 'Tools that facilitate collective decision-making processes, allowing communities to participate in governance and policy-making.',
			fr: "Des outils qui facilitent les processus de prise de décision collective, permettant aux communautés de participer à la gouvernance et à l'élaboration des politiques."
		}
	}
]);

export const TOOLS: Model.Tool[] = [
	{
		id: 'cobudget',
		name: 'Cobudget',
		description: {
			en: 'Cobudget is an open source platform for collaborative budgeting and decision-making. It allows communities to allocate funds collectively and transparently.',
			fr: "Cobudget est une plateforme open source pour la budgétisation collaborative et la prise de décision. Elle permet aux communautés d'allouer des fonds de manière collective et transparente."
		},
		url: 'https://www.cobudget.com/',
		types: {
			budgeting: TOOL_TYPES.budgeting,
			opensource: TOOL_TYPES.opensource
		}
	},
	{
		id: 'pretix',
		name: 'Pretix',
		description: {
			en: 'Pretix is an open source ticketing solution that can be self-hosted or used as a service. It supports complex ticketing scenarios, including add-ons, waiting lists, and more.',
			fr: "Pretix est une solution de billetterie open source qui peut être auto-hébergée ou utilisée en tant que service. Elle prend en charge des scénarios de billetterie complexes, y compris les options supplémentaires, les listes d'attente, et plus encore."
		},
		url: 'https://pretix.eu/',
		types: {
			ticketing: TOOL_TYPES.ticketing,
			opensource: TOOL_TYPES.opensource
		}
	},
	{
		id: 'fai-volunteer',
		name: 'FAI Volunteering System',
		description: {
			en: "The FAI Volunteering System is an open source platform for managing volunteers at events. It allows for scheduling, task assignment, and communication with volunteers. It's janky old PHP, but many communities use it.",
			fr: "Le système de bénévolat FAI est une plateforme open source pour la gestion des bénévoles lors d'événements. Il permet la planification, l'affectation des tâches et la communication avec les bénévoles. C'est un vieux PHP bancal, mais de nombreuses communautés l'utilisent."
		},
		url: 'https://github.com/Flashpoint-Artists-Initiative/Volunteering',
		types: {
			volunteer_management: TOOL_TYPES.volunteer_management,
			opensource: TOOL_TYPES.opensource
		}
	},
	{
		id: 'opencollective',
		name: 'Open Collective',
		description: {
			en: "Open Collective is an open-source set of tools to transparently manage large-scale community budgets. You can also apply to have your funds legally managed (for taxes and such) by a Fiscal Host for a fee, but you don't have to.",
			fr: "Open Collective est un ensemble d'outils open source permettant de gérer de manière transparente les budgets communautaires à grande échelle. Vous pouvez également demander à ce que vos fonds soient gérés légalement (pour les impôts et autres) par un hôte fiscal moyennant des frais, mais ce n'est pas obligatoire."
		},
		url: 'https://github.com/opencollective/opencollective',
		types: {
			budgeting: TOOL_TYPES.budgeting,
			opensource: TOOL_TYPES.opensource
		}
	},
	{
		id: 'leaflet',
		name: 'Leaflet Map Library',
		description: {
			en: 'Leaflet is an open-source java library to create interactive maps. The Borderland have used it to create their collaborative placement system you can find here : https://github.com/theborderland/map',
			fr: "Leaflet est une librairie Java open source permettant de créer des cartes interactives. The Borderland l'a utilisée pour créer son système de placement collaboratif, que vous pouvez trouver ici : https://github.com/theborderland/map"
		},
		url: 'https://github.com/Leaflet/Leaflet',
		types: {
			mapping: TOOL_TYPES.mapping,
			opensource: TOOL_TYPES.opensource
		}
	},
	{
		id: 'loomio',
		name: 'Loomio',
		description: {
			en: 'Loomio is open-source tool for collaborative decision making. It allows to set up online decision making systems that include the whole community.',
			fr: "Loomio est un outil open source destiné à la prise de décision collaborative. Il permet de mettre en place des systèmes de prise de décision en ligne qui incluent l'ensemble de la communauté."
		},
		url: 'https://github.com/loomio/loomio',
		types: {
			democracy: TOOL_TYPES.democracy,
			opensource: TOOL_TYPES.opensource
		}
	}
];
