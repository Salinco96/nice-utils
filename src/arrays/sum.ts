import { toArray } from "./toArray"

export function sum(iterable: Iterable<number>): number {
	return toArray(iterable).reduce((total, value) => total + value, 0)
}
