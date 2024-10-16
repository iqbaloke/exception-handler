"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationException = void 0;
// src/exceptions/ValidationException.ts
const BaseException_1 = require("./BaseException");
class ValidationException extends BaseException_1.BaseException {
    constructor(errors, message = 'Validation failed') {
        super(message, 400, 'ValidationException');
        this.errors = errors;
    }
}
exports.ValidationException = ValidationException;
