import type { ToString } from "@/types/types"

export function entries<K extends string, T>(
	object: Readonly<Partial<Record<K, T>>>,
): [K, T][]

export function entries<K extends number | string, T>(
	object: Readonly<Partial<Record<K, T>>>,
): [ToString<K>, T][]

export function entries<K extends string, T>(
	object: Readonly<Partial<Record<K, T>>>,
): [K, T][] {
	return Object.entries(object) as [K, T][]
}
