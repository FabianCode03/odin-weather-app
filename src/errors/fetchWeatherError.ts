// fetchWeatherError.ts
export class FetchWeatherError extends Error {
  httpStatus?: number;
  type: string;

  constructor(type: string, message: string, httpStatus?: number) {
    super(message);
    this.name = 'FetchWeatherError';
    this.type = type;
    if (httpStatus !== undefined) {
      this.httpStatus = httpStatus;
    }
  }
}

export class BadRequestError extends FetchWeatherError {
  constructor() {
    super(
      'BAD_REQUEST',
      'The format of the API is incorrect or an invalid parameter or combination of parameters was supplied. Provide a valid city name',
      400,
    );
  }
}

export class UnauthorizedError extends FetchWeatherError {
  constructor() {
    super(
      'UNAUTHORIZED',
      'There is a problem with the API key, account or subscription. May also be returned if a feature is requested for which the account does not have access to',
      401,
    );
  }
}

export class NotFoundError extends FetchWeatherError {
  constructor() {
    super('NOT_FOUND', 'The request cannot be matched to any valid API request endpoint structure', 404);
  }
}

export class TooManyRequestsError extends FetchWeatherError {
  constructor() {
    super('TOO_MANY_REQUESTS', 'The request was rate-limited due to too many requests. Please try again later', 429);
  }
}

export class InternalServerError extends FetchWeatherError {
  constructor() {
    super('INTERNAL_SERVER_ERROR', 'A general error has occurred processing the request', 500);
  }
}

export class UnknownFetchError extends FetchWeatherError {
  constructor(originalError: Error) {
    super('UNKNOWN', `An unknown error occurred: ${originalError.message}`);
    this.originalError = originalError;
  }

  public originalError: Error;
}

export class JSONParsingError extends FetchWeatherError {
  constructor() {
    super('JSON_PARSING_ERROR', 'Failed to parse JSON');
  }
}
