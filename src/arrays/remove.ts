export function remove<T>(array: ReadonlyArray<T>, value: T): T[] {
	return array.filter(item => item !== value)
}
