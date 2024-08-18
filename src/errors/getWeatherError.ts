export class GetWeatherError extends Error {
  userFriendlyMessage: string;
  originalError?: Error;

  constructor(userFriendlyMessage: string, originalError?: Error) {
    super(userFriendlyMessage);
    this.name = 'GetWeatherError';
    this.userFriendlyMessage = userFriendlyMessage;
    this.originalError = originalError;
  }
}

export class NetworkError extends GetWeatherError {
  constructor(originalError?: Error) {
    super('Network error occurred while fetching weather data.', originalError);
    this.name = 'NetworkError';
  }
}

export class CityNotFoundError extends GetWeatherError {
  constructor(originalError?: Error) {
    super('The specified city was not found.', originalError);
    this.name = 'CityNotFoundError';
  }
}

export class DataParsingError extends GetWeatherError {
  constructor(originalError?: Error) {
    super('Error occurred while parsing weather data.', originalError);
    this.name = 'DataParsingError';
  }
}

export class UnknownError extends GetWeatherError {
  constructor(originalError?: Error) {
    super('An unknown error occurred.', originalError);
    this.name = 'UnknownError';
  }
}
