export function forEach<K extends string, T>(
	object: Readonly<Partial<Record<K, T>>>,
	fn: (value: T, key: K) => void,
): void {
	for (const key in object) {
		const value = object[key]
		if (value !== undefined) {
			fn(value, key)
		}
	}
}
