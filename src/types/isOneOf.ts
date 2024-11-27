export function isOneOf<T>(
	value: unknown,
	values: ReadonlyArray<T>,
): value is T {
	return values.includes(value as T)
}
