import { compare } from "./compare"

export function sortBy<T, K extends bigint>(
	array: ReadonlyArray<T>,
	fn: (item: T) => K,
): T[]
export function sortBy<T, K extends number>(
	array: ReadonlyArray<T>,
	fn: (item: T) => K,
): T[]
export function sortBy<T, K extends string>(
	array: ReadonlyArray<T>,
	fn: (item: T) => K,
): T[]

export function sortBy<T>(
	array: ReadonlyArray<T>,
	fn: (item: T) => bigint | number | string,
): T[] {
	return array.slice().sort((a, b) => compare(fn(a) as number, fn(b) as number))
}
