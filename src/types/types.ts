export type AbstractConstructor<
	T extends object,
	Q extends AnyParameters = AnyParameters,
> = abstract new (...args: Q) => T

export type AnyArray = ReadonlyArray<unknown>

export type AnyFunction = (...args: AnyParameters) => unknown

// biome-ignore lint/suspicious/noExplicitAny: generic args
export type AnyParameters = any[]

export type AnyRecord = Partial<Record<number | string, unknown>>

export type Condition<T> =
	| ((value: T) => boolean)
	| (T extends ReadonlyArray<unknown>
			? { length?: number | Condition<number> }
			: { [K in keyof T]?: (T[K] & Primitive) | Condition<T[K]> })

export type Constructor<
	T extends object,
	Q extends AnyParameters = AnyParameters,
> = new (...args: Q) => T

export type Defined<T> = Exclude<T, undefined>

export type EmptyRecord = Record<never, never>

export type Getter<T, R = unknown> =
	| ((value: T) => R)
	| { [K in keyof T]-?: IfExtends<T[K], R, K> }[keyof T]

export type Hex = `0x${string}`

export type IfExtends<A, B, T, F = never> = [A] extends [B] ? T : F

export type IfIntersects<A, B, T, F = never> = A & B extends never ? F : T

export type IterableKey<T extends AnyRecord> =
	| (keyof T & string)
	| ToString<keyof T & number>

export type Maybe<T> = T | undefined

export type MaybeFunction<
	T,
	Q extends AnyParameters = [],
	// biome-ignore lint/complexity/noBannedTypes: generic function
> = Exclude<T, Function> | ((...args: Q) => T)

export type Primitive = bigint | boolean | number | string | null | undefined

export type StringEnum<T extends string> = Record<string, T>

export type ToString<T extends Primitive> = T extends string ? T : `${T}`
