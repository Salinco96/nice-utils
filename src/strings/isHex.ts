import type { Hex } from "../types/types"

const hexRegex = /^0x[0-9a-fA-F]+$/

export function isHex(value: string): value is Hex {
	return hexRegex.test(value)
}
