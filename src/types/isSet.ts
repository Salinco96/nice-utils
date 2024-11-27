export function isSet<T, Q>(value: Set<T> | Q): value is Set<T>
export function isSet<T, Q>(value: Iterable<T> | Q): value is ReadonlySet<T>
export function isSet(value: unknown): value is Set<unknown>

/**
 * Checks that a value is a {@link Set}.
 * @param value Value to check
 * @returns whether the value is a Set
 */
export function isSet(value: unknown): value is Set<unknown> {
	return value instanceof Set
}
