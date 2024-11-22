import type { AnyRecord } from "@/types/types"

export function size(object: AnyRecord): number {
	return Object.keys(object).length
}
