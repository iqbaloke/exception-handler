// src/exceptions/BaseException.ts
export class BaseException extends Error {
    public readonly name: string;
    public readonly message: string;
    public readonly statusCode: number;
  
    constructor(message: string, statusCode: number = 500, name: string = "BaseException") {
      super(message);
      this.name = name;
      this.message = message;
      this.statusCode = statusCode;
  
      Object.setPrototypeOf(this, new.target.prototype); // Mengatasi masalah inheritance di TypeScript
      Error.captureStackTrace(this);
    }
  }
  