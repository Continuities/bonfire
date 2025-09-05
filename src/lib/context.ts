import { getContext, setContext } from 'svelte';
import type { IdStore } from './id-store';

export const setStores = ({
	valors,
	tools
}: {
	valors: IdStore<Model.Valor>;
	tools: IdStore<Model.Tool>;
}) => {
	setContext('valors', valors);
	setContext('tools', tools);
};

export const getStores = () => ({
	valors: getContext<IdStore<Model.Valor>>('valors'),
	tools: getContext<IdStore<Model.Tool>>('tools')
});
