export function matchGroups(value: string, regex: RegExp): string[] {
	const match = value.match(regex)
	return match?.slice(1) ?? []
}
