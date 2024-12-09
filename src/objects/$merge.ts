import { forEach } from "./forEach"

export function $merge<T extends object>(base: T, other: Partial<T>): T {
	forEach(other, (value, key) => {
		base[key as keyof T] = value
	})

	return base
}
