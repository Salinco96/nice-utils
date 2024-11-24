import { unique } from "./unique"

export function union<T>(
	array: ReadonlyArray<T>,
	other: ReadonlyArray<T>,
): T[] {
	return unique(array.concat(other))
}
