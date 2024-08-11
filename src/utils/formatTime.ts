export function formatTime(time: string): string {
  if (!/^\d{2}:\d{2}:\d{2}$/.test(time)) {
    throw new Error('Invalid time format. Expected format is HH:MM:SS');
  }

  const [hours, minutes] = time.split(':');
  return `${hours}:${minutes}`;
}
