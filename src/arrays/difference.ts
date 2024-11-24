export function difference<T>(
	array: ReadonlyArray<T>,
	values: ReadonlyArray<T>,
): T[] {
	return array.filter(item => !values.includes(item))
}
