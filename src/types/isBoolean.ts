/**
 * Checks that a value is a boolean.
 * @param value Value to check
 * @returns whether the value is a boolean
 */
export function isBoolean(value: unknown): value is boolean {
	return typeof value === "boolean"
}
