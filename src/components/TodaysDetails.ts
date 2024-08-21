import type { WeatherData } from '../types/weatherTypes';
import { Card } from './Card';
import { InfoRow } from './InfoRow';
import minMaxTemp from '../img/ui_icons/minMaxTemp.png';
import temp from '../img/ui_icons/temp.png';
import humidity from '../img/ui_icons/humidity.png';

export function Today(weather: WeatherData): HTMLElement {
  // create elements
  const cardBody = document.createElement('div');

  // add classes
  cardBody.classList.add('today-body');

  // create info rows
  const temperature = InfoRow('Temperature', `${weather.days[0].temp.toFixed(0)}${weather.tempUnit}`, temp);
  const minMax = InfoRow(
    'Min/Max',
    `${weather.days[0].tempmin.toFixed(0)}${weather.tempUnit} / ${weather.days[0].tempmax.toFixed(0)}${weather.tempUnit}`,
    minMaxTemp,
  );
  const humidityElement = InfoRow('Humidity', `${weather.days[0].humidity}%`, humidity);

  // assemble
  cardBody.appendChild(temperature);
  cardBody.appendChild(minMax);
  cardBody.appendChild(humidityElement);
  cardBody.lastElementChild?.classList.remove('separator');
  (cardBody.firstElementChild as HTMLElement)?.style.setProperty('padding-top', '0px');

  // Extract month and day from the date string
  const dateWithoutYear = weather.days[0].datetime.slice(0, 7);

  const todayCard = Card("Today's Details", `${dateWithoutYear}🌈`, cardBody);
  todayCard.id = 'today';
  return todayCard;
}
