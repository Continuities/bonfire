export const actions = {
	default: async ({ request, locals: { services } }) => {
		const formData = await request.formData();
		const sections = JSON.parse(
			formData.get('sections') as string
		) as Array<Blueprint.BlueprintSection | null>;
		console.log(sections);
		return { success: true };
	}
};
