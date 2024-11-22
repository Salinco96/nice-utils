/**
 * Checks that a value is an array.
 * @param value Value to check
 * @returns whether the value is an array
 */
export function isArray<T>(value: unknown): value is T[] {
	return Array.isArray(value)
}
