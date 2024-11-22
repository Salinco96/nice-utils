/**
 * Checks that a value is a string representing a valid date.
 * @param value Value to check
 * @returns whether the value is a string representing a valid {@link Date}
 */
export function isDateString(value: string): boolean {
	return Number.isFinite(new Date(value).getTime())
}
