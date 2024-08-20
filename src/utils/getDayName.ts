/**
 * Returns the day of the week as an English string with 3 letters (e.g. "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun")
 * from a string in the format "DD MMM(as string with 3 letters) YYYY".
 * @param date The DateTime string.
 * @returns The day of the week.
 */
export function getDayName(date: string): string {
  if (date === 'Today') {
    return 'Today';
  }
  const parsedDate = new Date(Date.parse(date + ' GMT'));
  const day = parsedDate.getUTCDay();
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return days[day];
}
