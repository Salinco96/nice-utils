export function concat<T>(
	array: ReadonlyArray<T>,
	other: ReadonlyArray<T>,
): T[] {
	return array.concat(other)
}
