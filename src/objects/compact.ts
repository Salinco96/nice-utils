import { isNotNull } from "../types/isNotNull"
import { filterValues } from "./filterValues"

export function compact<K extends string, T>(
	object: Readonly<Partial<Record<K, T | null>>>,
): Partial<Record<K, Exclude<T, null>>> {
	return filterValues(object, isNotNull) as Partial<Record<K, Exclude<T, null>>>
}
