export function hasErrorProperty(obj: unknown): obj is { error: string } {
  return typeof obj === 'object' && obj !== null && 'error' in obj
}
