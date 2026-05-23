import type { HttpError } from "./http.js";

export class NotFoundError extends HttpError {
  constructor(message: string) {
    super(404, message)
  }
}