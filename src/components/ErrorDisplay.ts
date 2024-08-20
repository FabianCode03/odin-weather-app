import { Card } from './Card';
import { type GetWeatherError } from '../errors/getWeatherError';
import { FetchWeatherError } from '../errors/fetchWeatherError';

export function ErrorDisplay(error: GetWeatherError): HTMLElement {
  // checking which element to display
  const hasOriginalError = error.originalError != null;
  const optionalHttpStatusCode: number | null =
    hasOriginalError && error.originalError instanceof FetchWeatherError && error.originalError.httpStatus != null
      ? error.originalError.httpStatus
      : null;

  // create elements
  const cardBody = document.createElement('div');
  const userFriendlyMessage = document.createElement('p');
  const detailedMessage = document.createElement('p');

  // add classes
  cardBody.classList.add('error-body');
  userFriendlyMessage.classList.add('user-friendly-message', 'separator');
  detailedMessage.classList.add('detailed-message');

  // add content
  userFriendlyMessage.textContent = error.userFriendlyMessage;
  detailedMessage.textContent = error.originalError != null ? error.originalError.message : '';

  // assemble
  cardBody.appendChild(userFriendlyMessage);
  if (hasOriginalError) {
    cardBody.appendChild(detailedMessage);
  }

  // Append status code to error name if it exists
  const errorNameWithStatusCode =
    optionalHttpStatusCode != null ? `${error.name} (${optionalHttpStatusCode})` : error.name;

  const errorDisplay = Card('Error', errorNameWithStatusCode, cardBody);

  errorDisplay.id = 'error';
  errorDisplay.classList.add('error-card');
  cardBody.lastElementChild?.classList.remove('separator');

  return errorDisplay;
}
