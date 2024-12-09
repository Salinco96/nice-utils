import { resolve } from "../functions/resolve"
import { isDefined } from "../types/isDefined"
import type { AnyRecord, Defined, MaybeFunction } from "../types/types"

import { $set } from "./$set"

export function $init<
	T extends AnyRecord,
	K extends keyof T,
	V extends T[K] = Defined<T[K]>,
>(object: T, key: K, defaultValue: MaybeFunction<V>): Defined<T[K]> | V {
	const existing = object[key]
	return isDefined(existing)
		? existing
		: $set(object, key, resolve(defaultValue))
}
