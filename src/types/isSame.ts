import { get } from "../objects/get"
import type { Getter } from "./types"

export function isSame<K extends number | string | symbol>(
	key: K,
): <T extends { [P in K]?: unknown }>(value: T, other: T) => boolean

export function isSame<T>(getter: Getter<T>): (value: T, other: T) => boolean

export function isSame<T>(getter: Getter<T>): (value: T, other: T) => boolean {
	const _getter = getter instanceof Function ? getter : get(getter)
	return (value, other) => _getter(value) === _getter(other)
}
