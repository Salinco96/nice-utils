export function push<T>(array: ReadonlyArray<T>, value: T): T[] {
	return [...array, value]
}
