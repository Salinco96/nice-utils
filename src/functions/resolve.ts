import type { MaybeFunction } from "@/types/types"

export function resolve<
	T,
	// biome-ignore lint/suspicious/noExplicitAny: generic args
	Q extends any[] = any[],
>(value: MaybeFunction<T, Q>, ...args: Q): T {
	if (value instanceof Function) {
		return value(...args)
	}

	return value
}
