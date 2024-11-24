import type { Primitive } from "@/types/types"
import { difference } from "./difference"

export function union<T extends Primitive>(
	array: ReadonlyArray<T>,
	values: ReadonlyArray<T>,
): T[] {
	return array.concat(difference(values, array))
}
