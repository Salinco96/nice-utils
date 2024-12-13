export function startsWith(prefix: string): (value: string) => boolean {
	return value => value.startsWith(prefix)
}
