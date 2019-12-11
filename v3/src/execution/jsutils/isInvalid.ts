/**
 * Returns true if a value is undefined, or NaN.
 */
export default function isInvalid(value: unknown): boolean %checks {
  return value === undefined || value !== value;
}
