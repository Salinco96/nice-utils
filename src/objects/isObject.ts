import type { AnyRecord } from "../types/types"

/**
 * Checks that a value is an object.
 * @param value Value to check
 * @returns whether the value is an object
 */
export function isObject(value: unknown): value is AnyRecord {
	return typeof value === "object" && value !== null
}
