/**
 * Checks that a value is not `null`.
 * @param value Value to check
 * @returns whether the value is not null
 */
export function isNotNull<T>(value: T | null): value is Exclude<T, null> {
	return value !== null
}
