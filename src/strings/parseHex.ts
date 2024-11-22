import type { integer } from "@/types/integer"
import type { Hex } from "@/types/types"

export function parseHex(value: Hex): integer
export function parseHex(value: string): integer | undefined

export function parseHex(value: string): integer | undefined {
	const hex = Number.parseInt(value, 16) as integer
	return Number.isFinite(hex) ? hex : undefined
}
