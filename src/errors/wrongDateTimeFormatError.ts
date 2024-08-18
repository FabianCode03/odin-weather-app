export class WrongDateTimeFormatError extends Error {
  constructor() {
    super('Wrong date-time format. Please use the format HH:mm');
  }
}
