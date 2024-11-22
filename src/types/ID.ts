declare const kind: unique symbol

export function ID<T extends ID<number, object>>(id: number): T
export function ID<T extends ID<string, object>>(id: string): T
export function ID<T extends object>(id: number): ID<number, T>
export function ID<T extends object>(id: string): ID<string, T>

export function ID<T extends object>(id: number | string) {
	return id
}

// biome-ignore lint/suspicious/noRedeclare: <explanation>
export type ID<K extends number | string, T extends object> = K & { [kind]: T }
