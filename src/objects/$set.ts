import type { AnyRecord, Defined } from "../types/types"

export function $set<
	T extends AnyRecord,
	K extends keyof T,
	V extends T[K] = Defined<T[K]>,
>(object: T, key: K, value: V): V {
	if (value === undefined) {
		delete object[key]
	} else {
		object[key] = value
	}

	return value
}
