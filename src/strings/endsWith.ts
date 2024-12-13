export function endsWith(suffix: string): (value: string) => boolean {
	return value => value.endsWith(suffix)
}
