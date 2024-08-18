// fetchWeatherError.ts
export class FetchWeatherError extends Error {
  constructor(type: string, httpStatus: number | null, message: string) {
    super(message);
    this.name = 'FetchWeatherError';
  }
}

export class BadRequestError extends FetchWeatherError {
  constructor() {
    super(
      'BAD_REQUEST',
      400,
      'The format of the API is incorrect or an invalid parameter or combination of parameters was supplied. Provide a valid city name',
    );
  }
}

export class UnauthorizedError extends FetchWeatherError {
  constructor() {
    super(
      'UNAUTHORIZED',
      401,
      'There is a problem with the API key, account or subscription. May also be returned if a feature is requested for which the account does not have access to',
    );
  }
}

export class NotFoundError extends FetchWeatherError {
  constructor() {
    super(
      'NOT_FOUND',
      404,
      'The request cannot be matched to any valid API request endpoint structure',
    );
  }
}

export class TooManyRequestsError extends FetchWeatherError {
  constructor() {
    super(
      'TOO_MANY_REQUESTS',
      429,
      'The request was rate-limited due to too many requests. Please try again later',
    );
  }
}

export class InternalServerError extends FetchWeatherError {
  constructor() {
    super(
      'INTERNAL_SERVER_ERROR',
      500,
      'A general error has occurred processing the request',
    );
  }
}

export class UnknownError extends FetchWeatherError {
  constructor(originalError: Error) {
    super(
      'UNKNOWN',
      null,
      `An unknown error occurred: ${originalError.message}`,
    );
    this.originalError = originalError;
  }

  public originalError: Error;
}

export class JSONParsingError extends FetchWeatherError {
  constructor() {
    super('JSON_PARSING_ERROR', null, 'Failed to parse JSON');
  }
}
