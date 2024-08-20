import { Card } from './Card';

export function Forecast(forecast: string): HTMLElement {
  // create elements
  const cardBody = document.createElement('div');

  // add classes
  cardBody.classList.add('forecast-body');

  // assemble
  cardBody.textContent = forecast;

  const forecastCard = Card('Forecast', '📈', cardBody);
  forecastCard.classList.add('forecast');
  return forecastCard;
}
