import { ErrorDisplay } from '../components/ErrorDisplay';
import type { GetWeatherError } from '../errors/getWeatherError';

export function loadErrorWidget(body: HTMLElement, error: GetWeatherError): void {
  // remove all children from body
  while (body.firstChild != null) {
    body.removeChild(body.firstChild);
  }

  const errorWidget = ErrorDisplay(error);
  body.appendChild(errorWidget);
}
