import { writable } from 'svelte/store';

export type IdStore<T extends Model.WithId> = ReturnType<typeof idstore<T>>;

const idstore = <T extends Model.WithId>(initial: T[] = []) => {
	const { subscribe, set, update } = writable<Record<string, T>>(mappedById(initial));
	return { subscribe, set, update };
};

export default idstore;

export const mappedById = <K extends string, V extends Model.WithId>(items: V[]): Record<K, V> =>
	Object.fromEntries(items.map((item) => [item.id, item])) as Record<K, V>;
