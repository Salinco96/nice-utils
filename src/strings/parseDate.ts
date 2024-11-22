export function parseDate(value: string): Date | undefined {
	const date = new Date(value)
	return Number.isFinite(date.getTime()) ? date : undefined
}
