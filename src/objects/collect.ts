import { mapDefined } from "../arrays/mapDefined"
import type { ToString } from "../types/types"
import { keys } from "./keys"

export function collect<K extends string, T, R>(
	object: Readonly<Partial<Record<K, T>>>,
	fn: (value: T, key: K) => R,
): R[]

export function collect<K extends number | string, T, R>(
	object: Readonly<Partial<Record<K, T>>>,
	fn: (value: T, key: ToString<K>) => R,
): R[]

export function collect<K extends string, T, R>(
	object: Readonly<Partial<Record<K, T>>>,
	fn: (value: T, key: K) => R,
): R[] {
	return mapDefined(keys(object), key => {
		if (object[key] !== undefined) {
			return fn(object[key], key)
		}
	})
}
