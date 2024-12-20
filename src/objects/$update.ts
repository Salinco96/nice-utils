import type { AnyRecord, Defined } from "../types/types"
import { $set } from "./$set"

export function $update<
	T extends AnyRecord,
	K extends keyof T,
	V extends T[K] = Defined<T[K]>,
>(object: T, key: K, fn: (value: T[K]) => V): V {
	return $set(object, key, fn(object[key]))
}
