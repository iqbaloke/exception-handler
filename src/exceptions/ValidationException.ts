// src/exceptions/ValidationException.ts
import { BaseException } from './BaseException';

export class ValidationException extends BaseException {
  public readonly errors: any[];

  constructor(errors: any[], message: string = 'Validation failed') {
    super(message, 400, 'ValidationException');
    this.errors = errors;
  }
}
