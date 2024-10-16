"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundException = void 0;
// src/exceptions/NotFoundException.ts
const BaseException_1 = require("./BaseException");
class NotFoundException extends BaseException_1.BaseException {
    constructor(message = 'Resource not found') {
        super(message, 404, 'NotFoundException');
    }
}
exports.NotFoundException = NotFoundException;
