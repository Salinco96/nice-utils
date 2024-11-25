import { compare } from "./compare"

export function sort<T extends bigint>(value: ReadonlyArray<T>): T[]
export function sort<T extends number>(value: ReadonlyArray<T>): T[]
export function sort<T extends string>(value: ReadonlyArray<T>): T[]

export function sort(
	array: ReadonlyArray<bigint> | ReadonlyArray<number> | ReadonlyArray<string>,
): bigint[] | number[] | string[] {
	return array.slice().sort(compare)
}
