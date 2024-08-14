import './style.css';
import { type WeatherData } from './types/weatherTypes';
import { initialPageLoad } from './modules/initialPageLoad';
import { getWeather } from './modules/getWeather';
import { loadWidgets } from './modules/loadWidgets';

async function main(): Promise<void> {
  const { body } = initialPageLoad();
  try {
    const weather: WeatherData = await getWeather('New York');
    loadWidgets(body, weather);
  } catch (error) {
    if ((error as Error).message === 'City not found') {
      throw new Error('City not found');
    }
    throw error;
  }
}

main().catch((error) => {
  if (error.message === 'City not found') {
    console.log('finally');
  }
  console.error(error);
});
