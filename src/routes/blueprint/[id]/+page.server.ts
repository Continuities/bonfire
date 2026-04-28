import type { PageServerLoad } from './$types';

type LoadData = {
	blueprint: Blueprint.Blueprint;
};
export const load: PageServerLoad = async ({ params, locals: { services } }): Promise<LoadData> => {
	const id = params.id;
	const blueprint = await services.blueprint.getBlueprint(id);
	return {
		blueprint
	};
};
