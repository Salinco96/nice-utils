import type { Primitive } from "../types/types"

export function uniqueBy<T, S extends Primitive>(
	array: ReadonlyArray<T>,
	fn: (value: T) => S,
): T[] {
	const map = array.reduce((map, value) => {
		const key = fn(value)

		if (!map.has(key)) {
			map.set(key, value)
		}

		return map
	}, new Map<S, T>())

	return Array.from(map.values())
}
