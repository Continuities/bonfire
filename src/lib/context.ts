import { getContext, setContext } from 'svelte';
import type { IdStore } from './id-store';

export const setStores = ({
	valors,
	tools,
	toolTypes
}: {
	valors: IdStore<Model.Valor>;
	tools: IdStore<Model.Tool>;
	toolTypes: IdStore<Model.ToolType>;
}) => {
	setContext('valors', valors);
	setContext('tools', tools);
	setContext('toolTypes', toolTypes);
};

export const getStores = () => ({
	valors: getContext<IdStore<Model.Valor>>('valors'),
	tools: getContext<IdStore<Model.Tool>>('tools'),
	toolTypes: getContext<IdStore<Model.ToolType>>('toolTypes')
});
