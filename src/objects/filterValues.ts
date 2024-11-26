import type { ToString } from "../types/types"
import { reduce } from "./reduce"

export function filterValues<K extends number | string, T, R extends T>(
	object: Readonly<Partial<Record<K, T>>>,
	fn: (value: T) => value is R,
): Partial<Record<K, R>>

export function filterValues<K extends number | string, T>(
	object: Readonly<Partial<Record<K, T>>>,
	fn: (value: T, key: ToString<K>) => boolean,
): Partial<Record<K, T>>

export function filterValues<K extends string, T>(
	object: Readonly<Partial<Record<K, T>>>,
	fn: (value: T, key: K) => boolean,
): Partial<Record<K, T>>

export function filterValues<K extends string, T>(
	object: Readonly<Partial<Record<K, T>>>,
	fn: (value: T, key: K) => boolean,
): Partial<Record<K, T>> {
	return reduce<K, T, Partial<Record<K, T>>>(
		object,
		(result, value, key) => {
			if (fn(value, key)) {
				result[key] = value
			}
			return result
		},
		{},
	)
}
