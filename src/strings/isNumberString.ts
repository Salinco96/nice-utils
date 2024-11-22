import type { ToString } from "@/types/types"

export function isNumberString(value: string): value is ToString<number> {
	return Number.isFinite(Number(value))
}
