import { isDefined } from "../types/isDefined"
import type { AnyRecord, Defined } from "../types/types"

export function values<T extends AnyRecord>(object: T): Defined<T[keyof T]>[] {
	return Object.values(object).filter(isDefined) as Defined<T[keyof T]>[]
}
