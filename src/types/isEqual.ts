import { isObject } from "../objects/isObject"
import { isArray } from "./isArray"

// TODO: Set/Map...
export function isEqual<T>(value: T, other: T): boolean {
	if (isObject(value)) {
		return (
			isObject(other) &&
			Object.keys(value).every(key => value[key] === other[key]) &&
			Object.keys(other).every(
				key => other[key] === undefined || value[key] !== undefined,
			)
		)
	}

	if (isArray(value)) {
		return (
			isArray(other) &&
			value.length === other.length &&
			value.every((item, index) => item === other[index])
		)
	}

	if (value instanceof Date) {
		return other instanceof Date && value.getTime() === other.getTime()
	}

	return value === other
}
