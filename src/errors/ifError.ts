import { resolve } from "@/functions/resolve"
import type { MaybeFunction } from "@/types/types"
import { toError } from "./toError"

export function ifError<
	T,
	// biome-ignore lint/suspicious/noExplicitAny: generic args
	Q extends any[] = any[],
	R = T,
>(
	fn: (...args: Q) => T,
	onError: MaybeFunction<R, [error: Error]>,
): (...args: Q) => T | R {
	return (...args) => {
		try {
			return fn(...args)
		} catch (error) {
			return resolve(onError, toError(error))
		}
	}
}
