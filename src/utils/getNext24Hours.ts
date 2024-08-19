import type { WeatherData, Hour } from '../types/weatherTypes';

export function getNext24Hours(weather: WeatherData): Hour[] {
  const currentHour = new Date().getHours();
  const formattedCurrentHour = currentHour.toString().padStart(2, '0'); // Ensure two-digit format

  const todayHours = weather.days[0].hours;
  const tomorrowHours = weather.days[1].hours;

  // Combine today's and tomorrow's hours
  const combinedHours = [...todayHours, ...tomorrowHours];

  // Find the index of the current hour
  let startIndex = combinedHours.findIndex((hour) => hour.datetime.slice(0, 2) === formattedCurrentHour);

  // If the current hour is not found, default to 0
  if (startIndex === -1) {
    startIndex = 0;
  }

  // Create an array of the next 24 hours
  const next24Hours = [];
  for (let i = 0; i < 24; i++) {
    next24Hours.push(combinedHours[(startIndex + i) % combinedHours.length]);
  }

  return next24Hours;
}
