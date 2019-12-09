/**
 * Returns true if the value acts like a Promise, i.e. has a "then" function,
 * otherwise returns false.
 */
export default function isPromise<T>(value: any): value is PromiseLike<T> {
  return value != null && typeof value.then === 'function';
}

// This is possibly the right way to do it using unknown, but honestly it's
// probably overkill. TS struggles to accept the existence of object.then without
// the isThenable predicate.
//
// export function isPromise<T>(
//   maybePromise: unknown
// ): maybePromise is PromiseLike<T> {
//   return isThenable(maybePromise) && typeof maybePromise.then === "function";
// }

// function isThenable(
//   object: unknown
// ): object is { [key: string]: any; then: unknown } {
//   return typeof object === "object" && object !== null && "then" in object;
// }
