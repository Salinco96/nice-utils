import { assert } from "@/errors/assert"

export function parseDate(value: string): Date {
	const date = new Date(value)
	assert(Number.isFinite(date.getTime()), `Invalid date: "${value}"`)
	return date
}
