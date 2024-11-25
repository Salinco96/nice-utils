import { isDefined } from "../types/isDefined"
import type { Defined, Maybe } from "../types/types"
import { ensure } from "./ensure"

export function required<T>(
	value: Maybe<T>,
	message: string = "Required",
): Defined<T> {
	return ensure(value, isDefined, message)
}
