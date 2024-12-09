import { isObject } from "./isObject"
import { keys } from "./keys"

export type Condition<T> = {
	[K in keyof T]?: T[K] | null
}

export function where<T, S>(
	condition: (subject: T) => S,
	value: S,
): (subject: T) => boolean

export function where<K extends number | string | symbol, S>(
	key: K,
	value: S,
): (subject: Partial<Record<K, S | null>>) => boolean

export function where<T extends object, K extends keyof T>(
	key: K,
	value: T[K],
): (subject: T) => boolean

export function where<T extends object>(
	condition: T,
): (subject: { [K in keyof T]?: T[K] | null }) => boolean

export function where<T extends object>(
	condition: Partial<T>,
): (subject: T) => boolean

export function where<T extends Record<string, unknown>, S>(
	condition: Partial<T> | ((subject: T) => S) | keyof T,
	value?: S,
): (subject: T) => boolean {
	if (condition instanceof Function) {
		return (subject: T) => condition(subject) === value
	}

	if (isObject(condition)) {
		const ks = keys(condition)
		return (subject: T) => ks.every(k => subject[k] === condition[k])
	}

	return (subject: T) => subject[condition] === value
}
