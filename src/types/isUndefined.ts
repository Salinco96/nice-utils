/**
 * Checks that a value is `undefined`.
 * @param value Value to check
 * @returns whether the value is undefined
 */
export function isUndefined(value: unknown): value is undefined {
	return value === undefined
}
