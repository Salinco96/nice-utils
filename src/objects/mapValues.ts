import { reduce } from "./reduce"

export function mapValues<K extends string, T, R = T>(
	object: Readonly<Partial<Record<K, T>>>,
	fn: (value: T, key: K) => R,
): Partial<Record<K, R>> {
	return reduce<K, T, Partial<Record<K, R>>>(
		object,
		(result, value, key) => {
			result[key] = fn(value, key)
			return result
		},
		{},
	)
}
