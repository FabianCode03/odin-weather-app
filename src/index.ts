import './style.css';
import { initialPageLoad } from './modules/initialPageLoad';
import { getWeather } from './modules/getWeather';
import { loadWidgets } from './modules/loadWidgets';
import { loadErrorWidget } from './modules/loadErrorWidget';
import { Modal } from './components/Modal';

async function main(): Promise<void> {
  const { header, body } = initialPageLoad();

  const onSearch = async (city: string): Promise<void> => {
    const weather = await getWeather(city);
    if (weather.err) {
      loadErrorWidget(body, weather.val);
    } else {
      loadWidgets(body, weather.val);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const modal = Modal((city: string) => {
    void onSearch(city);
  });
  document.body.appendChild(modal);

  // Show the modal to enter the city name
  modal.style.display = 'flex';

  // Add event listener to search icon
  const searchIcon = header.querySelector('.search-icon-container');
  if (searchIcon != null) {
    searchIcon.addEventListener('click', () => {
      modal.style.display = 'flex';
    });
  }
}

main().catch((error: Error) => {
  console.error('An unexpected error occurred:', error);
});
