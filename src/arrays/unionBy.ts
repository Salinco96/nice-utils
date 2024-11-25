import type { Primitive } from "../types/types"
import { uniqueBy } from "./uniqueBy"

export function unionBy<T, S extends Primitive>(
	array: ReadonlyArray<T>,
	other: ReadonlyArray<T>,
	fn: (value: T) => S,
): T[] {
	return uniqueBy(array.concat(other), fn)
}
