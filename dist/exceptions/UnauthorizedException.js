"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnauthorizedException = void 0;
// src/exceptions/UnauthorizedException.ts
const BaseException_1 = require("./BaseException");
class UnauthorizedException extends BaseException_1.BaseException {
    constructor(message = 'Unauthorized access') {
        super(message, 401, 'UnauthorizedException');
    }
}
exports.UnauthorizedException = UnauthorizedException;
