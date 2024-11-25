export function sortWith<T>(
	array: ReadonlyArray<T>,
	fn: (value: T, other: T) => number,
): T[] {
	return array.slice().sort(fn)
}
