import { BaseException } from './BaseException';
export declare class ValidationException extends BaseException {
    readonly errors: any[];
    constructor(errors: any[], message?: string);
}
