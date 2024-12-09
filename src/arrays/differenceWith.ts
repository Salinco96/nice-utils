export function differenceWith<T>(
	array: ReadonlyArray<T>,
	values: ReadonlyArray<T>,
	fn: (value: T, other: T) => boolean,
): T[] {
	return array.filter(item => !values.some(other => fn(item, other)))
}
