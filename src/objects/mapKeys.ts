import { reduce } from "./reduce"

export function mapKeys<K extends string, T, R extends number | string = K>(
	object: Readonly<Partial<Record<K, T>>>,
	fn: (key: K, value: T) => R | null,
): Partial<Record<R, T>> {
	return reduce(
		object,
		(result, value, oldKey) => {
			const newKey = fn(oldKey, value)

			if (newKey != null) {
				result[newKey] = value
			}

			return result
		},
		{} as Partial<Record<R, T>>,
	)
}
