import type { AnyRecord, Defined, IterableKey } from "../types/types"

export function entries<T extends AnyRecord>(
	object: T,
): [key: IterableKey<T>, value: Defined<T[keyof T]>][] {
	return (
		Object.entries(object) as [IterableKey<T>, Defined<T[keyof T]>][]
	).filter(entry => entry[1] !== undefined)
}
