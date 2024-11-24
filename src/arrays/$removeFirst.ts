export function $removeFirst<T>(array: T[], value: T): boolean {
	const index = array.indexOf(value)

	if (index >= 0) {
		array.splice(index, 1)
		return true
	}

	return false
}
