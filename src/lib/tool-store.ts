import { readable } from 'svelte/store';

/* TODO: Constant for now, but eventually move into a database to
 *       support community-sourced additions and edits. */
export default readable<Model.Tool[]>([
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
			en: "Leaflet is an open-source java library to create interactive maps. The Borderland have used it to create their collaborative placement system you can find here : https://github.com/theborderland/map",
			fr: "Leaflet est une librairie Java open source permettant de créer des cartes interactives. The Borderland l'a utilisée pour créer son système de placement collaboratif, que vous pouvez trouver ici : https://github.com/theborderland/map"
		},
		url: 'https://github.com/Leaflet/Leaflet'
	},
		{
		id: 'loomio',
		name: 'Loomio',
		description: {
			en: "Loomio is open-source tool for collaborative decision making. It allows to set up online decision making systems that include the whole community.",
			fr: "Loomio est un outil open source destiné à la prise de décision collaborative. Il permet de mettre en place des systèmes de prise de décision en ligne qui incluent l'ensemble de la communauté."
		},
		url: 'https://github.com/loomio/loomio'
	}
]);
