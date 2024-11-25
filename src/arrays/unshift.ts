export function unshift<T>(array: ReadonlyArray<T>, value: T): T[] {
	return [value, ...array]
}
