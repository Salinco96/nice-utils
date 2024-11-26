export function containsAll<T>(
	array: ReadonlyArray<T>,
	values: ReadonlyArray<T>,
): boolean {
	return values.every(item => array.includes(item))
}
