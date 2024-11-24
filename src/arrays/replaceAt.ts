export function replaceAt<T>(
	array: ReadonlyArray<T>,
	index: number,
	value: T,
): T[] {
	const result = array.slice()
	result[index] = value
	return result
}
