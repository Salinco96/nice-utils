import type { AnyFunction, Primitive } from "./types"

// TODO: Objects?
export function isEqual<
	T extends Primitive | Primitive[] | Date | AnyFunction | symbol,
>(value: T, other: T): boolean {
	if (Array.isArray(value)) {
		return (
			Array.isArray(other) &&
			value.length === other.length &&
			value.every((item, index) => item === other[index])
		)
	}

	if (value instanceof Date) {
		return other instanceof Date && value.valueOf() === other.valueOf()
	}

	return value === other
}
