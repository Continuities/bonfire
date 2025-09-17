// See https://svelte.dev/docs/kit/types#app.d.ts

import type { SupabaseClient, Session, User } from '@supabase/supabase-js';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			supabase?: SupabaseClient;
			safeGetSession: () => Promise<{ session: Session | null; user: User | null }>;
			session?: Session | null;
			user?: User | null;
			services: {
				tool: Service.ToolService;
				valor: Service.ValorService;
				community: Service.CommunityService;
			};
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	namespace Service {
		type ServiceConstructor<T> = (locals: App.Locals) => T;
		interface ToolService {
			getTools: (filter?: Filter.ToolFilter) => Promise<Model.Tool[]>;
			getToolTypes: () => Promise<Record<Model.ToolTypeId, Model.ToolType>>;
			addMissingTools: (tools: Model.Tool[]) => Promise<void>;
		}
		interface ValorService {
			getValors: (filter?: Filter.ValorFilter) => Promise<Model.Valor[]>;
			addMissingValors: (valors: Model.Valor[]) => Promise<void>;
		}
		interface CommunityService {
			getCommunities: (filter?: Filter.CommunityFilter) => Promise<Model.Community[]>;
			addCommunity: (community: Model.Community) => Promise<void>;
		}
	}

	namespace I18n {
		type LocaleText = Record<string, string>;
	}

	namespace Model {
		type Emoji = string;
		type ValorId = string;
		type ToolId = string;
		type CommunityId = string;
		type ToolTypeId = string;
		interface WithId {
			id: string;
		}
		interface Valor {
			id: ValorId;
			name: I18n.LocaleText;
			description: I18n.LocaleText;
			icon?: Emoji;
		}
		interface Tool {
			id: ToolId;
			name: string;
			description: I18n.LocaleText;
			url: string;
			types: Record<ToolTypeId, ToolType>;
			used_by?: CommunityId[];
		}
		interface ToolType {
			id: ToolTypeId;
			icon?: Emoji;
			name: I18n.LocaleText;
			description: I18n.LocaleText;
		}
		interface Community {
			id: CommunityId;
			name: string;
			description: I18n.LocaleText;
			url: string | null;
			valors: Record<ValorId, Valor>;
			tools: Record<ToolId, Tool>;
		}
	}

	namespace Filter {
		interface ValorFilter {
			id?: Model.ValorId[];
			limit?: number;
		}
		interface ToolFilter {
			id?: Model.ToolId[];
			limit?: number;
		}
		interface CommunityFilter {
			id?: Model.CommunityId[];
			uses_tool?: Model.ToolId | null;
			with_valor?: Model.ValorId | null;
			limit?: number;
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
