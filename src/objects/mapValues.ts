import { reduce } from "./reduce"

export function mapValues<K extends string, T, R = T>(
	object: Readonly<Partial<Record<K, T>>>,
	fn: (value: T, key: K) => R,
): Partial<Record<K, R>> {
	return reduce<K, T, Partial<Record<K, R>>>(
		object,
		(result, value, key) => {
			const newValue = fn(value, key)

			if (newValue !== undefined) {
				result[key] = newValue
			}

			return result
		},
		{},
	)
}
