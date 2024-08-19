import { getNext24Hours } from '../utils/getNext24Hours';
import { validWeather } from '../data/validWeather';
// console.log(validWeather.days[1].hours);

describe('getNext24Hours', () => {
  it('returns 24 Hours', () => {
    const next24Hours = getNext24Hours(validWeather);
    expect(next24Hours).toHaveLength(24);
  });

  it('returns the next 24 hours', () => {
    const next24Hours = getNext24Hours(validWeather);
    const currentHour = new Date().getHours();
    const formattedCurrentHour = currentHour.toString().padStart(2, '0');
    const currentHourIndex = validWeather.days[0].hours.findIndex(
      (hour) => hour.datetime.slice(0, 2) === formattedCurrentHour,
    );
    const next24HoursFromToday = validWeather.days[0].hours.slice(currentHourIndex, currentHourIndex + 24);
    const next24HoursFromTomorrow = validWeather.days[1].hours.slice(0, 24 - next24HoursFromToday.length);
    const expectedNext24Hours = [...next24HoursFromToday, ...next24HoursFromTomorrow];
    expect(next24Hours).toEqual(expectedNext24Hours);
  });

  it('returns the next 24 hours when the current hour is not found', () => {
    const next24Hours = getNext24Hours(validWeather);
    const currentHour = new Date().getHours();
    const formattedCurrentHour = currentHour.toString().padStart(2, '0');
    const currentHourIndex = validWeather.days[0].hours.findIndex(
      (hour) => hour.datetime.slice(0, 2) === formattedCurrentHour,
    );
    const next24HoursFromToday = validWeather.days[0].hours.slice(currentHourIndex, currentHourIndex + 24);
    const next24HoursFromTomorrow = validWeather.days[1].hours.slice(0, 24 - next24HoursFromToday.length);
    const expectedNext24Hours = [...next24HoursFromToday, ...next24HoursFromTomorrow];
    expect(next24Hours).toEqual(expectedNext24Hours);
  });

  it('returns the next 24 hours when the current hour 01:00', () => {
    // overwrite the currentHour variable in getNext24Hours.ts
    jest.spyOn(Date.prototype, 'getHours').mockReturnValue(1);
    const next24Hours = getNext24Hours(validWeather);
    const currentHour = 1;
    const formattedCurrentHour = currentHour.toString().padStart(2, '0');
    const currentHourIndex = validWeather.days[0].hours.findIndex(
      (hour) => hour.datetime.slice(0, 2) === formattedCurrentHour,
    );
    const next24HoursFromToday = validWeather.days[0].hours.slice(currentHourIndex, currentHourIndex + 24);
    const next24HoursFromTomorrow = validWeather.days[1].hours.slice(0, 24 - next24HoursFromToday.length);
    const expectedNext24Hours = [...next24HoursFromToday, ...next24HoursFromTomorrow];
    expect(next24Hours).toEqual(expectedNext24Hours);
  });
});
