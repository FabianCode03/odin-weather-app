import { extractWeatherData } from '../modules/extractWeatherData';
import { validWeatherJSON } from '../data/validWeatherJSON';
import { validWeather } from '../data/validWeather';
import { ExtractWeatherDataError } from '../errors/extractWeatherDataError';

describe('extractWeatherData', () => {
  test('should return validWeather', () => {
    const weather = extractWeatherData(validWeatherJSON);
    expect(weather.val).toEqual(validWeather);
  });

  test('should throw an error for invalid JSON', () => {
    expect(extractWeatherData({}).val).toBeInstanceOf(ExtractWeatherDataError);
  });
});
