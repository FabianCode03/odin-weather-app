import { Card } from './Card';
import { InfoRow } from './InfoRow';
import { calcLengthOfDay } from '../utils/calcLengthOfDay';

export function SolarCycle(sunrise: string, sunset: string): HTMLElement {
  // create elements
  const cardBody = document.createElement('div');

  // add classes
  cardBody.classList.add('card-body', 'solar-cycle-body');

  // create info rows using InfoRow component
  const sunriseRow = InfoRow('Sunrise', sunrise);
  const sunsetRow = InfoRow('Sunset', sunset);
  const lengthOfDayRow = InfoRow(
    'Length of Day',
    `${calcLengthOfDay(sunrise, sunset)} hours`,
  );

  // assemble
  cardBody.appendChild(sunriseRow);
  cardBody.appendChild(sunsetRow);
  cardBody.appendChild(lengthOfDayRow);
  const solarCycle = Card('Solar Cycle', '🌞', cardBody);

  solarCycle.id = 'solar-cycle';
  cardBody.lastElementChild?.classList.remove('separator');

  return solarCycle;
}
