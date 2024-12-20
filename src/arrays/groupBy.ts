export function groupBy<T, K extends number | string>(
	items: T[],
	fn: (item: T, index: number) => K | null,
): Partial<Record<K, T[]>> {
	return items.reduce<Partial<Record<K, T[]>>>((result, item, index) => {
		const key = fn(item, index)
		if (key !== null) {
			if (result[key]) {
				result[key].push(item)
			} else {
				result[key] = [item]
			}
		}
		return result
	}, {})
}
