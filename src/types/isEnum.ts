/**
 * Checks that a value is a string enum member.
 * @param value Value to check
 * @param members TS string enum
 * @returns whether the value is a member of the given string enum
 */
export function isEnum<E extends string>(
	value: unknown,
	members: Record<string, E>,
): value is E {
	return Object.values(members).includes(value as E)
}
