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
	}
]);
