/**
 * Checks that a value is `null`.
 * @param value Value to check
 * @returns whether the value is null
 */
export function isNull(value: unknown): value is null {
	return value === null
}
