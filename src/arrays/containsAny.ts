export function containsAny<T>(
	array: ReadonlyArray<T>,
	values: ReadonlyArray<T>,
): boolean {
	return array.some(item => values.includes(item))
}
