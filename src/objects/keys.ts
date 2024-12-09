import type { AnyRecord, IterableKey } from "../types/types"

export function keys<T extends AnyRecord>(object: T): IterableKey<T>[] {
	return (Object.keys(object) as IterableKey<T>[]).filter(
		key => object[key] !== undefined,
	)
}
