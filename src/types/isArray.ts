export function isArray<T, Q>(value: Array<T> | Q): value is Array<T>
export function isArray<T, Q>(value: Iterable<T> | Q): value is ReadonlyArray<T>
export function isArray(value: unknown): value is unknown[]

/**
 * Checks that a value is an array.
 * @param value Value to check
 * @returns whether the value is an array
 */
export function isArray(value: unknown): value is unknown[] {
	return Array.isArray(value)
}
