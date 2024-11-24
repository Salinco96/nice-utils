export function insertAt<T>(
	array: ReadonlyArray<T>,
	index: number,
	...values: T[]
): T[] {
	const result = array.slice()
	result.splice(index, 0, ...values)
	return result
}
