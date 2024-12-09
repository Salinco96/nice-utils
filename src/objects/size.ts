import type { AnyRecord } from "../types/types"
import { keys } from "./keys"

export function size(object: AnyRecord): number {
	return keys(object).length
}
