"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConflictException = void 0;
// src/exceptions/ConflictException.ts
const BaseException_1 = require("./BaseException");
class ConflictException extends BaseException_1.BaseException {
    constructor(message = 'Conflict occurred') {
        super(message, 409, 'ConflictException');
    }
}
exports.ConflictException = ConflictException;
