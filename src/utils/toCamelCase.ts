export function toCamelCase(str: string): string {
  return str.replace(/-./g, (match) => match.charAt(1).toUpperCase());
}
