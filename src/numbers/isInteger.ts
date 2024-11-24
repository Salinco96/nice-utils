import type { integer } from "./integer"

export function isInteger(value: unknown): value is integer {
	return typeof value === "number" && Number.isSafeInteger(value)
}
