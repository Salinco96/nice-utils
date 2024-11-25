export function matchNamed<G extends string>(
	value: string,
	regex: RegExp,
): { [group in G]?: string } {
	const match = value.match(regex)
	return (match?.groups ?? {}) as { [group in G]?: string }
}
