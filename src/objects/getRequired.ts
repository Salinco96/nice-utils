import { assert } from "../errors/assert"
import { isDefined } from "../types/isDefined"
import type { Defined } from "../types/types"

export function getRequired<K extends number | string | symbol, S>(
	key: K,
	message?: string,
): <T extends Partial<Record<K, S | null>>>(subject: T) => Defined<T[K]>

export function getRequired<T extends object, K extends keyof T>(
	key: K,
	message?: string,
): (subject: T) => Defined<T[K]>

export function getRequired<T extends object, K extends keyof T>(
	key: K,
	message?: string,
): (subject: T) => Defined<T[K]> {
	return (subject: T) => {
		const value = subject[key]
		assert(isDefined(value), message || `Missing field "${key.toString()}"`)
		return value
	}
}
