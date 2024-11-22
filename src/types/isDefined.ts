import type { Defined, Maybe } from "./types"

export function isDefined<T>(value: Maybe<T>): value is Defined<T> {
	return value !== undefined
}
