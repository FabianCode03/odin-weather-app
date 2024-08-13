export async function getWeather(city: string): Promise<any> {
  const API_KEY = 'QMZ3LX3H3DNTBKFLT3BGJS5A5';
  const URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${API_KEY}`;

  try {
    const response = await fetch(URL);

    if (response.status !== 200) {
      throw new Error(`Status != 200: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Failed to fetch data: ${error.message}`);
    } else {
      throw new Error('Failed to fetch data: Unknown error');
    }
  }
}
