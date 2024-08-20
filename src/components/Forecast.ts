import { Card } from './Card';
import { InfoRow } from './InfoRow';

export function Forecast(forcastForToday: string, forcastForNextFewDays: string): HTMLElement {
  // create elements
  const cardBody = document.createElement('div');

  // add classes
  cardBody.classList.add('forecast-body');

  // add children
  cardBody.appendChild(InfoRow('Today', forcastForToday, null));
  cardBody.appendChild(InfoRow('Next few days', forcastForNextFewDays, null));
  cardBody.lastElementChild?.classList.remove('separator');
  (cardBody.firstElementChild as HTMLElement)?.style.setProperty('padding-top', '0px');

  const forecast = Card('Forecast', '📈', cardBody);
  forecast.id = 'forecast';
  return forecast;
}
