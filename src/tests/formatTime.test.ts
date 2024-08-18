import { formatDateTime } from '../utils/formatDateTime';
import { WrongDateTimeFormatError } from '../errors/wrongDateTimeFormatError';

describe('formatTime', () => {
  test('should format time correctly', () => {
    const time = formatDateTime('12:34:56');
    expect(time.val).toBe('12:34');
  });

  test('should format date correctly', () => {
    const date = formatDateTime('2021-01-01');
    expect(date.val).toBe('01 Jan 2021');
  });

  test('should throw an WrongDateTimeFormatError for invalid datetime formats', () => {
    const invalidDatetime = '2021-01-01 12:34:56';
    expect(formatDateTime(invalidDatetime).err).toBeInstanceOf(WrongDateTimeFormatError);
  });
});
