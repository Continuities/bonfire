export const COMMUNITIES: Model.Community[] = [
	{
		id: '1',
		name: { en: 'Open Source Ecology', de: 'Open Source Ecology' },
		description: {
			en: 'A network of farmers, engineers, and supporters building the Global Village Construction Set, an open source, low-cost, high-performance platform that allows for the easy fabrication of the 50 different industrial machines that it takes to build a small civilization with modern comforts.',
			de: 'Ein Netzwerk von Landwirten, Ingenieuren und Unterstützern, die den Global Village Construction Set aufbauen, eine Open-Source-, kostengünstige, leistungsstarke Plattform, die die einfache Herstellung der 50 verschiedenen Industriemaschinen ermöglicht, die zum Bau einer kleinen Zivilisation mit modernen Annehmlichkeiten erforderlich sind.'
		},
		url: 'https://opensourceecology.org',
		valors: {
			'1': {
				id: '1',
				name: { en: 'Open Source', de: 'Open Source' },
				description: {
					en: 'We believe in the power of open source to drive innovation and collaboration.',
					de: 'Wir glauben an die Kraft von Open Source, um Innovation und Zusammenarbeit voranzutreiben.'
				},
				icon: '🌐'
			}
		},
		tools: []
	},
	{
		id: '2',
		name: { en: 'Farm Hack', de: 'Farm Hack' },
		description: {
			en: 'A community of farmers and innovators sharing open source tools and ideas to improve agricultural practices and sustainability.',
			de: 'Eine Gemeinschaft von Landwirten und Innovatoren, die Open-Source-Werkzeuge und Ideen teilen, um landwirtschaftliche Praktiken und Nachhaltigkeit zu verbessern.'
		},
		url: 'https://farmhack.org',
		valors: {
			'1': {
				id: '1',
				name: { en: 'Collaboration', de: 'Zusammenarbeit' },
				description: {
					en: 'We believe in the power of collaboration to solve complex problems.',
					de: 'Wir glauben an die Kraft der Zusammenarbeit, um komplexe Probleme zu lösen.'
				},
				icon: '🤝'
			}
		},
		tools: []
	},
	{
		id: '3',
		name: { en: 'Open Food Network', de: 'Open Food Network' },
		description: {
			en: 'A global community working to create a more equitable and sustainable food system through open source technology and collaboration.',
			de: 'Eine globale Gemeinschaft, die daran arbeitet, ein gerechteres und nachhaltigeres Lebensmittelsystem durch Open-Source-Technologie und Zusammenarbeit zu schaffen.'
		},
		url: 'https://openfoodnetwork.org',
		valors: {
			'1': {
				id: '1',
				name: { en: 'Sustainability', de: 'Nachhaltigkeit' },
				description: {
					en: 'We believe in the importance of sustainability for the health of our planet and future generations.',
					de: 'Wir glauben an die Bedeutung der Nachhaltigkeit für die Gesundheit unseres Planeten und zukünftiger Generationen.'
				},
				icon: '🌱'
			}
		},
		tools: []
	}
];

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
	}
];

export const TOOLS: Model.Tool[] = [
	{
		id: 'cobudget',
		name: 'Cobudget',
		description: {
			en: 'Cobudget is an open source platform for collaborative budgeting and decision-making. It allows communities to allocate funds collectively and transparently.',
			fr: "Cobudget est une plateforme open source pour la budgétisation collaborative et la prise de décision. Elle permet aux communautés d'allouer des fonds de manière collective et transparente."
		},
		url: 'https://www.cobudget.com/'
	},
	{
		id: 'pretix',
		name: 'Pretix',
		description: {
			en: 'Pretix is an open source ticketing solution that can be self-hosted or used as a service. It supports complex ticketing scenarios, including add-ons, waiting lists, and more.',
			fr: "Pretix est une solution de billetterie open source qui peut être auto-hébergée ou utilisée en tant que service. Elle prend en charge des scénarios de billetterie complexes, y compris les options supplémentaires, les listes d'attente, et plus encore."
		},
		url: 'https://pretix.eu/'
	},
	{
		id: 'fai-volunteer',
		name: 'FAI Volunteering System',
		description: {
			en: "The FAI Volunteering System is an open source platform for managing volunteers at events. It allows for scheduling, task assignment, and communication with volunteers. It's janky old PHP, but many communities use it.",
			fr: "Le système de bénévolat FAI est une plateforme open source pour la gestion des bénévoles lors d'événements. Il permet la planification, l'affectation des tâches et la communication avec les bénévoles. C'est un vieux PHP bancal, mais de nombreuses communautés l'utilisent."
		},
		url: 'https://github.com/Flashpoint-Artists-Initiative/Volunteering'
	},
	{
		id: 'opencollective',
		name: 'Open Collective',
		description: {
			en: "Open Collective is an open-source set of tools to transparently manage large-scale community budgets. You can also apply to have your funds legally managed (for taxes and such) by a Fiscal Host for a fee, but you don't have to.",
			fr: "Open Collective est un ensemble d'outils open source permettant de gérer de manière transparente les budgets communautaires à grande échelle. Vous pouvez également demander à ce que vos fonds soient gérés légalement (pour les impôts et autres) par un hôte fiscal moyennant des frais, mais ce n'est pas obligatoire."
		},
		url: 'https://github.com/opencollective/opencollective'
	},
	{
		id: 'leaflet',
		name: 'Leaflet Map Library',
		description: {
			en: 'Leaflet is an open-source java library to create interactive maps. The Borderland have used it to create their collaborative placement system you can find here : https://github.com/theborderland/map',
			fr: "Leaflet est une librairie Java open source permettant de créer des cartes interactives. The Borderland l'a utilisée pour créer son système de placement collaboratif, que vous pouvez trouver ici : https://github.com/theborderland/map"
		},
		url: 'https://github.com/Leaflet/Leaflet'
	},
	{
		id: 'loomio',
		name: 'Loomio',
		description: {
			en: 'Loomio is open-source tool for collaborative decision making. It allows to set up online decision making systems that include the whole community.',
			fr: "Loomio est un outil open source destiné à la prise de décision collaborative. Il permet de mettre en place des systèmes de prise de décision en ligne qui incluent l'ensemble de la communauté."
		},
		url: 'https://github.com/loomio/loomio'
	}
];
