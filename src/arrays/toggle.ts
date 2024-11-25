import { remove } from "./remove"

export function toggle<T>(array: ReadonlyArray<T>, value: T): T[] {
	return array.includes(value) ? remove(array, value) : [...array, value]
}
