export function formatDateTime(datetime: string): string {
  // datetime is a time
  if (/^\d{2}:\d{2}:\d{2}$/.test(datetime)) {
    const [hours, minutes] = datetime.split(':');
    return `${hours}:${minutes}`;
  }

  // datetime is a date
  if (/^\d{4}-\d{2}-\d{2}$/.test(datetime)) {
    const date = new Date(datetime);
    const day = String(date.getUTCDate()).padStart(2, '0');
    const month = date.toLocaleString('en-US', {
      month: 'short',
      timeZone: 'UTC',
    });
    const year = date.getUTCFullYear();
    return `${day} ${month} ${year}`;
  }

  throw new Error(
    'Invalid datetime format. Expected format is HH:MM:SS or YYYY-MM-DD',
  );
}
