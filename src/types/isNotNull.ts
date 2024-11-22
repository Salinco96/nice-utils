export function isNotNull<T>(value: T | null): value is Exclude<T, null> {
	return value !== null
}
