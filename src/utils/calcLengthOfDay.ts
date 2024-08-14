export function calcLengthOfDay(sunrise: string, sunset: string): number {
  const [sunriseHour, sunriseMinute] = sunrise.split(':').map(Number);
  const [sunsetHour, sunsetMinute] = sunset.split(':').map(Number);

  const sunriseInMinutes = sunriseHour * 60 + sunriseMinute;
  const sunsetInMinutes = sunsetHour * 60 + sunsetMinute;

  const lengthOfDayInMinutes = sunsetInMinutes - sunriseInMinutes;
  const lengthOfDayInHours = lengthOfDayInMinutes / 60;

  return Number(lengthOfDayInHours.toFixed(2));
}
