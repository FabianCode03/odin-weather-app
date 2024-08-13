import { WeatherData } from '../types/weatherTypes';

export class CurrentWeather {
  private weather: WeatherData;

  constructor(weather: WeatherData) {
    this.weather = weather;
  }

  public render(): string {
    return `
        <div class="weather-widget">
          <h2 class="location">${this.weather.resolvedAddress}</h2>
          <div class="weather-details">
            <div class="weather-icon">
              <img src="${this.weather.currentConditions.icon}" alt="${
                this.weather.currentConditions.conditions
              }" />
            </div>
            <div class="weather-info">
              <div class="temperature">${this.weather.currentConditions.temp}${this.weather.tempUnit}</div>
              <div class="conditions">${this.weather.currentConditions.conditions}</div>
              <div class="additional-info">
                <p><strong>Humidity:</strong> ${this.weather.currentConditions.humidity}%</p>
                <p><strong>Precipitation:</strong> ${this.weather.currentConditions.precipprob}% (${this.weather.currentConditions.preciptype})</p>
                <p><strong>Sunrise:</strong> ${this.weather.currentConditions.sunrise}</p>
                <p><strong>Sunset:</strong> ${this.weather.currentConditions.sunset}</p>
              </div>
            </div>
          </div>
          <div class="description">${this.weather.description}</div>
          <div class="datetime">${this.weather.currentConditions.datetime}</div>
        </div>
      `;
  }
}
