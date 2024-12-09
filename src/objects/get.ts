export function get<K extends number | string | symbol, S>(
	key: K,
): <T extends Partial<Record<K, S | null>>>(subject: T) => T[K]

export function get<T extends object, K extends keyof T>(
	key: K,
): (subject: T) => T[K]

export function get<T extends object, K extends keyof T>(
	key: K,
): (subject: T) => T[K] {
	return (subject: T) => subject[key]
}
