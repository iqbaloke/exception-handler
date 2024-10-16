"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseException = void 0;
// src/exceptions/BaseException.ts
class BaseException extends Error {
    constructor(message, statusCode = 500, name = "BaseException") {
        super(message);
        this.name = name;
        this.message = message;
        this.statusCode = statusCode;
        Object.setPrototypeOf(this, new.target.prototype); // Mengatasi masalah inheritance di TypeScript
        Error.captureStackTrace(this);
    }
}
exports.BaseException = BaseException;
