/**
 * Asserts that a condition is satisfied.
 * @param condition Condition
 * @param message Error message
 * @throws if {@link condition} is `false`
 */
export function assert(
	condition: boolean,
	message: string = "Assertion failed",
): asserts condition {
	if (!condition) {
		throw Error(message)
	}
}
