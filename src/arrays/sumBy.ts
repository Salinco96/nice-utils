import { toArray } from "./toArray"

export function sumBy<T>(
	iterable: Iterable<T>,
	fn: (value: T) => number,
): number {
	return toArray(iterable).reduce((total, value) => total + fn(value), 0)
}
