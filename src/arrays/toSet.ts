export function toSet<T>(iterable: Iterable<T>): Set<T> {
	return iterable instanceof Set ? iterable : new Set(iterable)
}
