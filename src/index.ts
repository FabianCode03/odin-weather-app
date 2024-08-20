import './style.css';
import { initialPageLoad } from './modules/initialPageLoad';
import { getWeather } from './modules/getWeather';
import { loadWidgets } from './modules/loadWidgets';
import { loadErrorWidget } from './modules/loadErrorWidget';

async function main(): Promise<void> {
  const { body } = initialPageLoad();

  const weather = await getWeather('heyuan');
  if (weather.err) {
    loadErrorWidget(body, weather.val);
  }

  if (weather.ok) {
    // Render weather widget
    loadWidgets(body, weather.val);
  }
}

main().catch((error: Error) => {
  console.error('An unexpected error occurred:', error);
});
