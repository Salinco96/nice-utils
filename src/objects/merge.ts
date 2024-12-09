import { $merge } from "./$merge"

export function merge<T extends object>(base: T, other: Partial<T>): T

export function merge<T extends object>(base: T | undefined, other: T): T

export function merge<T extends object>(base: T | undefined, other: T): T {
	return $merge({ ...base } as T, other)
}
