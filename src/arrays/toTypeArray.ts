import type { Constructor } from "../types/types"

export function toTypeArray<T, R extends ArrayLike<T> = ArrayLike<T>>(
	iterable: Iterable<T>,
	constructor: Constructor<R, [iterable: Iterable<T>]>,
): R {
	return iterable instanceof constructor ? iterable : new constructor(iterable)
}
