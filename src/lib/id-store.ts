import { writable } from 'svelte/store';

export type IdStore<T extends Model.WithId> = ReturnType<typeof idstore<T>>;

const idstore = <T extends Model.WithId>(initial: T[] = []) => {
	const { subscribe, set, update } = writable<Record<string, T>>(
		Object.fromEntries(initial.map((item) => [item.id, item]))
	);
	return { subscribe, set, update };
};

export default idstore;
