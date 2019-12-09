/**
 * Returns true if a value is undefined, or NaN.
 *
 * Note: TS doesn't capture NaN as a type, but this is functional at runtime.
 */
export default function isInvalid(value: unknown): value is undefined {
  return value === undefined || value !== value;
}
