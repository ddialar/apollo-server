/**
 * Returns true if a value is null, undefined, or NaN.
 *
 * Note: TS doesn't capture NaN as a type, but this is functional at runtime.
 */
export default function isNullish(value: unknown): value is null | undefined {
  return value === null || value === undefined || value !== value;
}
