import { forEach } from "./forEach"

export function reduce<K extends string, T, R>(
	object: Readonly<Partial<Record<K, T>>>,
	fn: (result: R, value: T, key: K) => R,
	initialValue: R,
): R {
	let result = initialValue

	forEach(object, (value, key) => {
		result = fn(result, value, key)
	})

	return result
}
