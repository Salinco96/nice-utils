import type { AbstractConstructor } from "./types"

/**
 * Checks that a value is an instance of the given class.
 * @param value Value to check
 * @param constructor Class constructor
 * @returns whether the value is an instance of the given class
 */
export function isInstance<T extends object>(
	value: unknown,
	constructor: AbstractConstructor<T>,
): value is T {
	return value instanceof constructor
}
