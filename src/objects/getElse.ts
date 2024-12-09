import { resolve } from "../functions/resolve"
import { isDefined } from "../types/isDefined"
import type { Defined, MaybeFunction } from "../types/types"

export function getElse<K extends number | string | symbol, S>(
	key: K,
	defaultValue: MaybeFunction<S>,
): <T extends Partial<Record<K, S | null>>>(subject: T) => Defined<T[K]> | S

export function getElse<T extends object, K extends keyof T, D = Defined<T[K]>>(
	key: K,
	defaultValue: MaybeFunction<D>,
): (subject: T) => Defined<T[K]> | D

export function getElse<T extends object, K extends keyof T>(
	key: K,
	defaultValue: MaybeFunction<T[K]>,
): (subject: T) => T[K] {
	return (subject: T) => {
		const value = subject[key]
		return isDefined(value) ? value : resolve(defaultValue)
	}
}
