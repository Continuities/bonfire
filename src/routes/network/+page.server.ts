import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (): Promise<{ communities: Model.Community[] }> => {
	// Hardcoded for now, but attach to a database
	return {
		communities: [
			{
				id: '1',
				name: { en: 'Open Source Ecology', de: 'Open Source Ecology' },
				description: {
					en: 'A network of farmers, engineers, and supporters building the Global Village Construction Set, an open source, low-cost, high-performance platform that allows for the easy fabrication of the 50 different industrial machines that it takes to build a small civilization with modern comforts.',
					de: 'Ein Netzwerk von Landwirten, Ingenieuren und Unterstützern, die den Global Village Construction Set aufbauen, eine Open-Source-, kostengünstige, leistungsstarke Plattform, die die einfache Herstellung der 50 verschiedenen Industriemaschinen ermöglicht, die zum Bau einer kleinen Zivilisation mit modernen Annehmlichkeiten erforderlich sind.'
				},
				url: 'https://opensourceecology.org',
				valors: [
					{
						id: '1',
						name: { en: 'Open Source', de: 'Open Source' },
						description: {
							en: 'We believe in the power of open source to drive innovation and collaboration.',
							de: 'Wir glauben an die Kraft von Open Source, um Innovation und Zusammenarbeit voranzutreiben.'
						},
						icon: '🌐'
					}
				],
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
				valors: [
					{
						id: '1',
						name: { en: 'Collaboration', de: 'Zusammenarbeit' },
						description: {
							en: 'We believe in the power of collaboration to solve complex problems.',
							de: 'Wir glauben an die Kraft der Zusammenarbeit, um komplexe Probleme zu lösen.'
						},
						icon: '🤝'
					}
				],
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
				valors: [
					{
						id: '1',
						name: { en: 'Sustainability', de: 'Nachhaltigkeit' },
						description: {
							en: 'We believe in the importance of sustainability for the health of our planet and future generations.',
							de: 'Wir glauben an die Bedeutung der Nachhaltigkeit für die Gesundheit unseres Planeten und zukünftiger Generationen.'
						},
						icon: '🌱'
					}
				],
				tools: []
			}
		]
	};
};
