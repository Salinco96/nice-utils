import { resolve } from "../functions/resolve"
import type { MaybeFunction } from "../types/types"

export function fill<T>(
	length: number,
	fn: MaybeFunction<T, [index: number]>,
): T[] {
	return Array.from({ length }, (value, index) => resolve(fn, index))
}
