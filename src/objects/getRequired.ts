import { assert } from "../errors/assert"
import { isDefined } from "../types/isDefined"
import type { AnyRecord, Defined, Key } from "../types/types"

export function getRequired<T extends AnyRecord, K extends Key<T>>(
	object: T,
	key: K,
	message?: string,
): Defined<T[K]> {
	const value = object[key]
	assert(isDefined(value), message || `Missing field "${key}"`)
	return value
}
