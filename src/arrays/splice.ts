export function splice<T>(
	array: ReadonlyArray<T>,
	index: number,
	count: number,
	...values: T[]
): T[] {
	const result = array.slice()
	result.splice(index, count, ...values)
	return result
}
