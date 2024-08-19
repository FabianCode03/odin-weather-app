import { ErrorDisplay } from '../components/ErrorDisplay';
import type { GetWeatherError } from '../errors/getWeatherError';

export function loadErrorWidget(body: HTMLElement, error: GetWeatherError): void {
  const errorWidget = ErrorDisplay(error);
  body.appendChild(errorWidget);
}
