import { assert } from "../errors/assert"

export function ensure<R extends T, T = unknown>(
	value: T,
	fn: (value: T) => value is R,
	message: string = "Invalid",
): R {
	assert(fn(value), message)
	return value
}
