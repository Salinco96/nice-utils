export type AbstractConstructor<
	T extends object,
	Q extends AnyParameters = AnyParameters,
> = abstract new (...args: Q) => T

export type AnyArray = ReadonlyArray<unknown>

export type AnyFunction = (...args: AnyParameters) => unknown

// biome-ignore lint/suspicious/noExplicitAny: generic args
export type AnyParameters = any[]

export type AnyRecord = Partial<Record<number | string, unknown>>

export type Constructor<
	T extends object,
	Q extends AnyParameters = AnyParameters,
> = new (...args: Q) => T

export type Defined<T> = Exclude<T, undefined>

export type EmptyRecord = Record<never, never>

export type Hex = `0x${string}`

export type Key<T extends AnyRecord> = keyof T & (number | string)

export type Maybe<T> = T | undefined

export type MaybeFunction<
	T,
	Q extends AnyParameters = [],
	// biome-ignore lint/complexity/noBannedTypes: generic function
> = Exclude<T, Function> | ((...args: Q) => T)

export type Primitive = bigint | boolean | number | string | null | undefined

export type ToString<T extends Primitive> = `${T}`
