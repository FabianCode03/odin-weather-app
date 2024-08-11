import { extractWeatherData } from '../modules/extractWeatherData';
import { validWeatherJSON } from '../data/validWeatherJSON';
import { validWeather } from '../data/validWeather';

describe('extractWeatherData', () => {
  test('should return validWeather', () => {
    const weather = extractWeatherData(validWeatherJSON);
    expect(weather).toEqual(validWeather);
  });

  test('should throw an error for invalid JSON', () => {
    expect(() => extractWeatherData({})).toThrow('Invalid weather data');
  });
});
