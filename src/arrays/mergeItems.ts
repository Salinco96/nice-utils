export function mergeItems<T>(
	array: ReadonlyArray<T>,
	other: ReadonlyArray<T>,
	equalFn: (value: T, other: T) => boolean,
	mergeFn: (value: T, other: T) => T,
): T[] {
	const result = array.slice()

	for (const value of other) {
		const index = result.findIndex(item => equalFn(value, item))
		if (index >= 0) {
			result[index] = mergeFn(result[index], value)
		} else {
			result.push(value)
		}
	}

	return result
}
