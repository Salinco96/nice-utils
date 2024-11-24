export function splitBy<T>(
	items: T[],
	fn: (item: T, index: number) => boolean,
): [true: T[], false: T[]] {
	const others: T[] = []

	return [
		items.filter((item, index) => {
			if (fn(item, index)) {
				return true
			}

			others.push(item)
			return false
		}),
		others,
	]
}
