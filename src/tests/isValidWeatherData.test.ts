import { isValidWeatherData } from '../modules/isValidWeatherData';
import { validWeatherJSON } from '../utils/validWeatherJSON';

describe('isValidWeatherData', () => {
  it('should return true for valid weather data', () => {
    expect(isValidWeatherData(validWeatherJSON)).toBe(true);
  });

  it('should return false for invalid weather data with incorrect type', () => {
    const invalidWeatherData = { ...validWeatherJSON, resolvedAddress: 123 };
    expect(isValidWeatherData(invalidWeatherData)).toBe(false);
  });

  it('should return false for invalid weather data with missing property', () => {
    const { resolvedAddress, ...rest } = validWeatherJSON;
    const invalidWeatherData = { ...rest };
    expect(isValidWeatherData(invalidWeatherData)).toBe(false);
  });

  it('should return false for invalid nested property type', () => {
    const invalidWeatherData = {
      ...validWeatherJSON,
      days: validWeatherJSON.days.map((day) => ({ ...day, tempmax: '84.6' })),
    };
    expect(isValidWeatherData(invalidWeatherData)).toBe(false);
  });

  it('should return false for invalid nested property missing', () => {
    const invalidWeatherData = {
      ...validWeatherJSON,
      days: validWeatherJSON.days.map(({ tempmax, ...rest }) => ({ ...rest })),
    };
    expect(isValidWeatherData(invalidWeatherData)).toBe(false);
  });

  it('should return false for invalid nested array property type', () => {
    const invalidWeatherData = {
      ...validWeatherJSON,
      days: validWeatherJSON.days.map((day) => ({
        ...day,
        hours: day.hours.map((hour) => ({ ...hour, temp: '67.9' })),
      })),
    };
    expect(isValidWeatherData(invalidWeatherData)).toBe(false);
  });

  it('should return false for invalid nested array property missing', () => {
    const invalidWeatherData = {
      ...validWeatherJSON,
      days: validWeatherJSON.days.map((day) => ({
        ...day,
        hours: day.hours.map(({ temp, ...rest }) => ({ ...rest })),
      })),
    };
    expect(isValidWeatherData(invalidWeatherData)).toBe(false);
  });
});
