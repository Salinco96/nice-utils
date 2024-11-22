export type AbstractConstructor<
	T extends object,
	// biome-ignore lint/suspicious/noExplicitAny: generic args
	Q extends any[] = any[],
> = abstract new (...args: Q) => T

export type AnyRecord = Partial<Record<number | string, unknown>>

export type Constructor<
	T extends object,
	// biome-ignore lint/suspicious/noExplicitAny: generic args
	Q extends any[] = any[],
> = new (...args: Q) => T

export type Defined<T> = Exclude<T, undefined>

export type EmptyRecord = Record<never, never>

export type Hex = `0x${string}`

export type Maybe<T> = T | undefined

export type Primitive = bigint | boolean | number | string | null | undefined

export type ToString<T extends Primitive> = `${T}`
