export function match(value: string, regex: RegExp): string | undefined {
	return value.match(regex)?.at(0)
}
