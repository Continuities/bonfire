import { redirect, isRedirect } from '@sveltejs/kit';
export const actions = {
	default: async ({ request, locals: { services } }) => {
		const formData = await request.formData();
		const sections = JSON.parse(
			formData.get('sections') as string
		) as Array<Blueprint.BlueprintSection>;
		try {
			const blueprint = await services.blueprint.saveBlueprint(sections);
			throw redirect(303, `/blueprint/${blueprint.id}`);
		} catch (error) {
			if (isRedirect(error)) {
				throw error;
			}
			console.error('Error saving blueprint:', error);
			return { success: false, error: 'Failed to save blueprint. Please try again.' };
		}
	}
};
