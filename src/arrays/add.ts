export function add<T>(array: ReadonlyArray<T>, value: T): T[] {
	return array.includes(value) ? [...array] : [...array, value]
}
