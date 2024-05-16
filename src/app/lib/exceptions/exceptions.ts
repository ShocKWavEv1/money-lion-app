export class ApiFailedError extends Error {
  constructor(message = "Houston we have a problem!") {
    super(message);
    this.name = "ApiFailedError";
  }
}
