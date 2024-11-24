export function intersection<T>(
	array: ReadonlyArray<T>,
	values: ReadonlyArray<T>,
): T[] {
	return array.filter(item => values.includes(item))
}
