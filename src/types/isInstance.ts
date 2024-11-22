import type { AbstractConstructor } from "./types"

export function isInstance<T extends object>(
	value: unknown,
	constructor: AbstractConstructor<T>,
): value is T {
	return value instanceof constructor
}
