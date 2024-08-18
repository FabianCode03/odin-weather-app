export class ExtractWeatherDataError extends Error {
  originalError?: Error;

  constructor(message: string, originalError?: Error) {
    super(message);
    this.name = 'ExtractWeatherDataError';
    this.originalError = originalError;
  }
}
