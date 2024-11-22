export function toArray<T>(iterable: Iterable<T>): T[] {
	return Array.isArray(iterable) ? iterable : Array.from(iterable)
}
