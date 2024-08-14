import { calcLengthOfDay } from '../utils/calcLengthOfDay';

describe('calcLengthOfDay', () => {
  it('should calculate the length of the day', () => {
    const sunrise = '06:00';
    const sunset = '18:00';
    const result = calcLengthOfDay(sunrise, sunset);
    expect(result).toBe('12h 0m');
  });

  it('should calculate the length of the day for a day uneven hours', () => {
    const sunrise = '06:30';
    const sunset = '18:30';
    const result = calcLengthOfDay(sunrise, sunset);
    expect(result).toBe('12h 0m');
  });
});
