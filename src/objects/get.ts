import type { AnyRecord, Key } from "../types/types"

export function get<T extends AnyRecord, K extends Key<T>>(
	object: T,
	key: K,
): T[K] {
	return object[key]
}
