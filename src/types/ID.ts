declare const kind: unique symbol

/**
 * Casts a basic number or string to an {@link ID}.
 * @param id number or string ID
 * @returns the same ID, narrowed for the given object type
 */
export function ID<T extends ID<number, object>>(id: number): T
export function ID<T extends ID<string, object>>(id: string): T
export function ID<T extends object>(id: number): ID<number, T>
export function ID<T extends object>(id: string): ID<string, T>

export function ID<T extends object>(id: number | string) {
	return id
}

/**
 * Tags an ID (number or string) with the represented object type.
 *
 * This can improve self-documentation and prevents mixing incompatible IDs.
 */
// biome-ignore lint/suspicious/noRedeclare: built-in-constructor-like
export type ID<K extends number | string, T extends object> = K & { [kind]: T }
