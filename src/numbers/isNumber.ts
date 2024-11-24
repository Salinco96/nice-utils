/**
 * Checks that a value is a number.
 * @param value Value to check
 * @returns whether the value is a number
 */
export function isNumber(value: unknown): value is number {
	return typeof value === "number"
}
