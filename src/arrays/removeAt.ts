export function removeAt<T>(array: ReadonlyArray<T>, index: number): T[] {
	const result = array.slice()
	result.splice(index, 1)
	return result
}
