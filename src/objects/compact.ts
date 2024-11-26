import { isArray } from "../types/isArray"
import { isDefined } from "../types/isDefined"
import { filterValues } from "./filterValues"

export function compact<T>(array: ReadonlyArray<T | undefined>): T[]

export function compact<K extends number | string, T>(
	object: Readonly<Partial<Record<K, T | undefined>>>,
): Partial<Record<K, T>>

export function compact<K extends number | string, T>(
	object:
		| ReadonlyArray<T | undefined>
		| Readonly<Partial<Record<K, T | undefined>>>,
): T[] | Partial<Record<K, T>> {
	return isArray(object)
		? object.filter(isDefined)
		: filterValues(object, isDefined)
}
