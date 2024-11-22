import { isDefined } from "@/types/isDefined"
import { toArray } from "./toArray"

export function mapDefined<T, R = T>(
	iterable: Iterable<T>,
	fn: (value: T, index: number, array: ReadonlyArray<T>) => R | undefined,
): R[] {
	return toArray(iterable).map(fn).filter(isDefined)
}
