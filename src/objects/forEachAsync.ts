export async function forEachAsync<K extends string, T>(
	object: Readonly<Partial<Record<K, T>>>,
	fn: (value: T, key: K) => Promise<void>,
): Promise<void> {
	for (const key in object) {
		const value = object[key]
		if (value !== undefined) {
			await fn(value, key)
		}
	}
}
