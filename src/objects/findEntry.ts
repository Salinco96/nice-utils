import type { Defined } from "../types/types"

export function findEntry<T, K extends string>(
	object: Partial<Record<K, T>>,
	fn: (value: Defined<T>, key: K) => boolean,
): [key: K, value: Defined<T>] | undefined {
	for (const key in object) {
		const value = object[key] as Defined<T> | undefined
		if (value !== undefined && fn(value, key)) {
			return [key, value]
		}
	}
}
