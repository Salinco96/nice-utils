import { resolve } from "../functions/resolve"
import { isDefined } from "../types/isDefined"
import type { AnyRecord, Defined, Key, MaybeFunction } from "../types/types"

export function getElse<
	T extends AnyRecord,
	K extends Key<T>,
	V = Defined<T[K]>,
>(object: T, key: K, defaultValue: MaybeFunction<V>): Defined<T[K]> | V {
	const value = object[key]
	return isDefined(value) ? value : resolve(defaultValue)
}
