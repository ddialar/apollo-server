export default function devAssert(condition: mixed, message: string): asserts condition {
  const booleanCondition = Boolean(condition);
  if (!booleanCondition) {
    throw new Error(message);
  }
}
