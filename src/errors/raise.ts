import { toError } from "./toError"

export function raise(error: Error | string): never {
	throw toError(error)
}
