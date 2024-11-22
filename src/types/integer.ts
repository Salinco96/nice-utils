declare const integer: unique symbol

export type integer = number & { [integer]: true }

export function Integer(value: unknown): integer {
	return Math.floor(Number(value)) as integer
}
