import './style.css';
import { initialPageLoad } from './modules/initialPageLoad';
import { getWeather } from './modules/getWeather';
import { loadWidgets } from './modules/loadWidgets';

async function main(): Promise<void> {
  const { body } = initialPageLoad();

  const weather = await getWeather('London');
  if (weather.err) {
    // Render error message as a widget
  }

  if (weather.ok) {
    // Render weather widget
    loadWidgets(body, weather.val);
  }
}

main().catch((error: Error) => {
  console.error('An unexpected error occurred:', error);
});
