import { switchTempUnit } from '../utils/switchTempUnit';
import { validWeather } from '../data/validWeather';
import type { WeatherData } from '../types/weatherTypes';

describe('switchTempUnit', () => {
  let weather: WeatherData;

  it('should switch the temperature unit to Celsius', () => {
    weather = switchTempUnit(validWeather);
    expect(weather.tempUnit).toBe('°C');
    expect(weather.days[0].temp).toBeCloseTo(23.3); // 73.9°F
    expect(weather.days[0].tempmax).toBeCloseTo(28.9); // 84.1°F
    expect(weather.days[0].tempmin).toBeCloseTo(15.9); // 60.7°F
    expect(weather.days[0].hours[0].temp).toBeCloseTo(21.6); // 70.9°F
    expect(weather.currentConditions.temp).toBeCloseTo(21.7); // 71.1°F
  });

  it('should switch the temperature unit back to Fahrenheit', () => {
    const weather2 = switchTempUnit(weather);
    expect(weather2.tempUnit).toBe('°F');
    expect(weather2.days[0].temp).toBeCloseTo(73.9); // 23.3°C
    expect(weather2.days[0].tempmax).toBeCloseTo(84.0); // 28.9°C
    expect(weather2.days[0].tempmin).toBeCloseTo(60.6); // 15.9°C
    expect(weather2.days[0].hours[0].temp).toBeCloseTo(70.9); // 21.6°C
    expect(weather2.currentConditions.temp).toBeCloseTo(71.1); // 21.7°C
  });
});
