import { isArray } from "../types/isArray"
import { filterValues } from "./filterValues"

export function compact<T>(
	array: ReadonlyArray<T | null | undefined>,
): Exclude<T, null | undefined>[]

export function compact<K extends number | string, T>(
	object: Readonly<Partial<Record<K, T | null | undefined>>>,
): Partial<Record<K, Exclude<T, null | undefined>>>

export function compact<K extends number | string, T>(
	object:
		| ReadonlyArray<T | null | undefined>
		| Readonly<Partial<Record<K, T | null | undefined>>>,
): T[] | Partial<Record<K, T>> {
	return isArray(object)
		? object.filter(value => value != null)
		: filterValues(object, value => value != null)
}
