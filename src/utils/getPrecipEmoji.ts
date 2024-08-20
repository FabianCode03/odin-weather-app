export function getPrecipEmoji(precipType: string[] | null): string {
  let emoji = '💧';
  if (precipType !== null && precipType !== undefined) {
    if (precipType.includes('freezingrain') || precipType.includes('snow') || precipType.includes('ice')) {
      emoji = '❄️';
    }
  }
  return emoji;
}
