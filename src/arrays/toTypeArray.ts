export function toTypeArray<T, R extends ArrayLike<T> = ArrayLike<T>>(
	iterable: Iterable<T>,
	constructor: new (iterable: Iterable<T>) => R,
): R {
	return iterable instanceof constructor ? iterable : new constructor(iterable)
}
