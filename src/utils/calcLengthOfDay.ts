export function calcLengthOfDay(sunrise: string, sunset: string): string {
  const [sunriseHours, sunriseMinutes] = sunrise.split(':').map(Number);
  const [sunsetHours, sunsetMinutes] = sunset.split(':').map(Number);

  let totalMinutes =
    sunsetHours * 60 + sunsetMinutes - (sunriseHours * 60 + sunriseMinutes);
  if (totalMinutes < 0) {
    totalMinutes += 24 * 60; // handle cases where sunset is after midnight
  }

  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return `${hours}h ${minutes}m`;
}
