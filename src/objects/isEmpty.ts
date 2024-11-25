import type { AnyRecord } from "../types/types"
import { size } from "./size"

export function isEmpty(object: AnyRecord): boolean {
	return size(object) === 0
}
