export function values<T>(object: Readonly<Partial<Record<string, T>>>): T[] {
	return Object.values(object) as T[]
}
