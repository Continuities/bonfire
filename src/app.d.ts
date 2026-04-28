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
				blueprint: Service.BlueprintService;
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
			getToolsForCommunity: (communityId: Model.CommunityId) => Promise<Model.Tool[]>;
			getToolTypes: () => Promise<Record<Model.ToolTypeId, Model.ToolType>>;
			addMissingTools: (tools: Model.Tool[]) => Promise<void>;
		}
		interface ValorService {
			getValors: (filter?: Filter.ValorFilter) => Promise<Model.Valor[]>;
			getValorsForCommunity: (communityId: Model.CommunityId) => Promise<Model.Valor[]>;
			addMissingValors: (valors: Model.Valor[]) => Promise<void>;
		}
		interface CommunityService {
			getCommunities: (filter?: Filter.CommunityFilter) => Promise<Model.Community[]>;
			addCommunity: (community: Model.Community) => Promise<void>;
		}

		interface BlueprintService {
			saveBlueprint: (sections: Blueprint.BlueprintSection[]) => Promise<Blueprint.Blueprint>;
			getBlueprint: (id: Blueprint.BlueprintId) => Promise<Blueprint.Blueprint>;
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
			upheld_by?: CommunityId[];
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
			location: string;
			description: I18n.LocaleText;
			url: string | null;
			valors: Record<ValorId, Valor>;
			tools: Record<ToolId, Tool>;
		}
		interface Location {
			city?: string | null | undefined;
			stateCode?: string | null | undefined;
			countryCode: string;
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
			location?: Model.Location;
		}
	}

	namespace Blueprint {
		type BlueprintId = string;
		type BlueprintSectionId = 'land' | 'tickets' | 'volunteers';
		interface Blueprint {
			id: BlueprintId;
			sections: BlueprintSection[];
		}
		interface BlueprintQuestion {
			section: BlueprintSectionId;
			question: string;
			description: string;
			related_tool?: Model.ToolTypeId;
			tool_required?: boolean;
			allow_many_tools?: boolean;
		}
		interface BlueprintSection {
			id: BlueprintSectionId;
			selected_tools?: Model.ToolId[];
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
