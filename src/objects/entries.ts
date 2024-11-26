import type { ToString } from "../types/types"

export function entries<K extends string, T>(
	object: Readonly<Partial<Record<K, T>>>,
): [key: K, value: T][]

export function entries<K extends number | string, T>(
	object: Readonly<Partial<Record<K, T>>>,
): [key: ToString<K>, value: T][]

export function entries<K extends string, T>(
	object: Readonly<Partial<Record<K, T>>>,
): [key: K, value: T][] {
	return Object.entries(object) as [K, T][]
}
