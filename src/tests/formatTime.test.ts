import { formatDateTime } from '../utils/formatDateTime';

describe('formatTime', () => {
  test('should format time correctly', () => {
    const time = formatDateTime('12:34:56');
    expect(time).toBe('12:34');
  });

  test('should format date correctly', () => {
    const date = formatDateTime('2021-01-01');
    expect(date).toBe('01 Jan 2021');
  });

  test('should throw an error for invalid datetime format', () => {
    expect(() => formatDateTime('12:34')).toThrow(
      'Invalid datetime format. Expected format is HH:MM:SS or YYYY-MM-DD',
    );
  });
});
