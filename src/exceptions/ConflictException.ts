// src/exceptions/ConflictException.ts
import { BaseException } from './BaseException';

export class ConflictException extends BaseException {
  constructor(message: string = 'Conflict occurred') {
    super(message, 409, 'ConflictException');
  }
}
