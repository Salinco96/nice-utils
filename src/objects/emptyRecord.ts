export function emptyRecord<
	K extends number | string = string,
	T = unknown,
>(): Partial<Record<K, T>> {
	return {}
}
