export function containsAll<T>(
	array: ReadonlyArray<T>,
	values: ReadonlyArray<T>,
): boolean {
	return array.every(item => values.includes(item))
}
