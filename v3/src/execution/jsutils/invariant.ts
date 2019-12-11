export default function invariant(condition: mixed, message?: string): asserts condition {
  const booleanCondition = Boolean(condition);
  if (!booleanCondition) {
    throw new Error(
      message != null ? message : 'Unexpected invariant triggered',
    );
  }
}
