export function generate<T, K extends number | string, V>(
	items: T[],
	fn: (item: T, index: number) => readonly [key: K, value: V],
): Partial<Record<K, V>> {
	return items.reduce<Partial<Record<K, V>>>((result, item, index) => {
		const [key, value] = fn(item, index)
		if (value !== undefined) {
			result[key] = value
		}
		return result
	}, {})
}
