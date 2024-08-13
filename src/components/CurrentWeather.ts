import { type WeatherData } from '../types/weatherTypes';

export class CurrentWeather {
  private readonly weather: WeatherData;

  constructor(weather: WeatherData) {
    this.weather = weather;
  }

  public render(): string {
    const { resolvedAddress, currentConditions, tempUnit, description } =
      this.weather;

    const {
      icon,
      conditions,
      temp,
      humidity,
      precipprob,
      preciptype,
      sunrise,
      sunset,
      datetime,
    } = currentConditions;

    return `
        <div class="weather-widget">
          <h2 class="location">${resolvedAddress}</h2>
          <div class="weather-details">
            <div class="weather-icon">
              <img src="${icon}" alt="${conditions}" />
            </div>
            <div class="weather-info">
              <div class="temperature">${temp}${tempUnit}</div>
              <div class="conditions">${conditions}</div>
              <div class="additional-info">
                <p><strong>Humidity:</strong> ${humidity}%</p>
                <p><strong>Precipitation:</strong> ${precipprob}% (${preciptype?.join(', ') ?? ''})</p>
                <p><strong>Sunrise:</strong> ${sunrise}</p>
                <p><strong>Sunset:</strong> ${sunset}</p>
              </div>
            </div>
          </div>
          <div class="description">${description}</div>
          <div class="datetime">${datetime}</div>
        </div>
      `;
  }
}
