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
		type ValorId = string;
		type Emoji = string;
		interface WithId {
			id: string;
		}
		interface Valor {
			id: ValorId;
			name: I19n.LocaleText;
			description: I19n.LocaleText;
			icon?: Emoji;
		}
		type ToolId = string;
		interface Tool {
			id: ToolId;
			name: I19n.LocaleText;
			description: I19n.LocaleText;
			url: string;
		}
		type CommunityId = string;
		interface Community {
			id: CommunityId;
			name: I19n.LocaleText;
			description: I19n.LocaleText;
			url: string | null;
			valors: Record<ValorId, Valor>;
			tools: Record<ToolId, Tool>;
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

	namespace I18n {
		type LocaleText = string | Record<string, string>;
	}
}

export {};
