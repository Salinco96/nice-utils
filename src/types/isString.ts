/**
 * Checks that a value is a string.
 * @param value Value to check
 * @returns whether the value is a string
 */
export function isString(value: unknown): value is string {
	return typeof value === "string"
}
