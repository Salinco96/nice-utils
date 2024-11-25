import type { ToString } from "../types/types"

export function keys<K extends string>(
	object: Readonly<Partial<Record<K, unknown>>>,
): K[]

export function keys<K extends number | string>(
	object: Readonly<Partial<Record<K, unknown>>>,
): ToString<K>[]

export function keys<K extends string>(
	object: Readonly<Partial<Record<K, unknown>>>,
): K[] {
	return Object.keys(object) as K[]
}
