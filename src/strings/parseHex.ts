import { assert } from "../errors/assert"
import type { integer } from "../numbers/integer"

export function parseHex(value: string): integer {
	const hex = Number.parseInt(value, 16) as integer
	assert(Number.isFinite(hex), `Invalid hex: "${value}"`)
	return hex
}
