// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	namespace Model {
		interface Valor {
			id: string;
			name: string;
			description: string;
			icon?: string;
		}
	}

	namespace View {
		type MarginValue = number; // For now, just rem units
		interface MarginProps {
			margin?: MarginValue;
			mt?: MarginValue;
			mr?: MarginValue;
			mb?: MarginValue;
			ml?: MarginValue;
			mx?: MarginValue;
			my?: MarginValue;
		}
	}
}

export {};
