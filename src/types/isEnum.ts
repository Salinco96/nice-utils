import type { StringEnum } from "./types"

/**
 * Checks that a value is a *string* enum member.
 *
 * Numeric and mixed enums are not supported.
 * @param value Value to check
 * @param members TS string enum
 * @returns whether the value is a member of the given string enum
 */
export function isEnum<T extends string>(
	value: unknown,
	members: StringEnum<T>,
): value is T {
	return Object.values(members).includes(value as T)
}
