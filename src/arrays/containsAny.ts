export function containsAny<T>(
	array: ReadonlyArray<T>,
	values: ReadonlyArray<T>,
): boolean {
	return values.some(item => array.includes(item))
}
