export function containsWith<T>(
	array: ReadonlyArray<T>,
	value: T,
	fn: (value: T, other: T) => boolean,
): boolean {
	for (const item of array) {
		if (fn(value, item)) {
			return true
		}
	}

	return false
}
