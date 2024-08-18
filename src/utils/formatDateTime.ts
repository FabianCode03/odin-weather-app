import { Ok, Err, type Result } from 'ts-results';
import { WrongDateTimeFormatError } from '../errors/wrongDateTimeFormatError';

export function formatDateTime(datetime: string): Result<string, WrongDateTimeFormatError> {
  // datetime is a time
  if (/^\d{2}:\d{2}:\d{2}$/.test(datetime)) {
    const [hours, minutes] = datetime.split(':');
    return Ok(`${hours}:${minutes}`);
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
    return Ok(`${day} ${month} ${year}`);
  }

  return Err(new WrongDateTimeFormatError());
}
