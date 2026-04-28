/**
 * Blueprint service with a supabase backend
 * @since 2026-04-28
 * @author Michael Townsend <@continuities>
 */

import { error } from '@sveltejs/kit';
import { v4 as uuid } from 'uuid';

const BlueprintService: Service.ServiceConstructor<Service.BlueprintService> = ({ supabase }) => ({
	saveBlueprint: async (sections) => {
		if (!supabase) {
			throw error(500, 'db client not initialized');
		}
		const blueprintId = uuid();
		const section_rows = sections.map((section, index) => ({
			blueprint: blueprintId,
			index,
			section: section.id
		}));
		const tool_rows = sections.flatMap(
			(section) =>
				section.selected_tools?.map((toolId) => ({
					blueprint: blueprintId,
					section: section.id,
					tool: toolId
				})) ?? []
		);

		const results = await Promise.all([
			supabase.from('blueprint_section').insert(section_rows),
			supabase.from('blueprint_tool').insert(tool_rows)
		]);

		const errors = results.map((r) => r.error).filter(Boolean);
		if (errors.length > 0) {
			console.error('Error saving blueprint:', errors);
			throw error(500, 'Failed to save blueprint');
		}

		return {
			id: blueprintId,
			sections
		};
	},

	getBlueprint: async (id) => {
		if (!supabase) {
			throw error(500, 'db client not initialized');
		}
		const { data: section_rows, error: section_error } = await supabase
			.from('blueprint_section')
			.select('*')
			.eq('blueprint', id)
			.order('index', { ascending: true });

		if (section_error) {
			console.error('Error fetching blueprint sections:', section_error);
			throw error(500, 'Failed to fetch blueprint');
		}

		const { data: tool_rows, error: tool_error } = await supabase
			.from('blueprint_tool')
			.select('*')
			.eq('blueprint', id);

		if (tool_error) {
			console.error('Error fetching blueprint tools:', tool_error);
			throw error(500, 'Failed to fetch blueprint');
		}

		const sections = section_rows.map((section) => ({
			id: section.section,
			selected_tools: tool_rows
				.filter((tool) => tool.section === section.section)
				.map((tool) => tool.tool)
		}));

		return {
			id,
			sections
		};
	}
});

export default BlueprintService;
