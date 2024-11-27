import type { Defined, Maybe } from "./types"

/**
 * Checks that a value is not `undefined`.
 * @param value Value to check
 * @returns whether the value is not undefined
 */
export function isDefined<T>(value: Maybe<T>): value is Defined<T> {
	return value !== undefined
}
