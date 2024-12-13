import type { Defined } from "../types/types"

export function findKey<T, K extends string>(
	object: Partial<Record<K, T>>,
	fn: (value: Defined<T>, key: K) => boolean,
): K | undefined {
	for (const key in object) {
		const value = object[key] as Defined<T> | undefined
		if (value !== undefined && fn(value, key)) {
			return key
		}
	}
}
