import { Card } from './Card';
import { InfoRow } from './InfoRow';
import { calcLengthOfDay } from '../utils/calcLengthOfDay';
import sunriseIcon from '../img/ui_icons/sunrise.png';
import sunsetIcon from '../img/ui_icons/sunset.png';
import solarCycleIcon from '../img/ui_icons/solarCycle.png';

export function SolarCycle(sunrise: string, sunset: string): HTMLElement {
  // create elements
  const cardBody = document.createElement('div');

  // add classes
  cardBody.classList.add('card-body', 'solar-cycle-body');

  // calculate length of day
  const lengthOfDayResult = calcLengthOfDay(sunrise, sunset);

  let lengthOfDay: string;

  if (lengthOfDayResult.ok) {
    lengthOfDay = lengthOfDayResult.val;
  } else {
    lengthOfDay = 'Invalid date format!';
  }

  // create info rows using InfoRow component
  const sunriseRow = InfoRow('Sunrise', sunrise, sunriseIcon);
  const sunsetRow = InfoRow('Sunset', sunset, sunsetIcon);
  const lengthOfDayRow = InfoRow('Length of Day', lengthOfDay, solarCycleIcon);

  // assemble
  cardBody.appendChild(sunriseRow);
  cardBody.appendChild(sunsetRow);
  cardBody.appendChild(lengthOfDayRow);
  const solarCycle = Card('Solar Cycle', '🌞', cardBody);

  solarCycle.id = 'solar-cycle';
  cardBody.lastElementChild?.classList.remove('separator');
  (cardBody.firstElementChild as HTMLElement)?.style.setProperty('padding-top', '0px');

  return solarCycle;
}
