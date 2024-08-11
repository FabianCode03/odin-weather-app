import { formatTime } from '../utils/formatTime';

describe('formatTime', () => {
  test('should format time correctly', () => {
    const time = formatTime('12:34:56');
    expect(time).toBe('12:34');
  });

  test('should throw an error for invalid time format', () => {
    expect(() => formatTime('12:34')).toThrow(
      'Invalid time format. Expected format is HH:MM:SS',
    );
  });
});
