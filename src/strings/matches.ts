export function matches(value: string, regex: RegExp): boolean {
	return regex.test(value)
}
