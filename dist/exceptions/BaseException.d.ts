export declare class BaseException extends Error {
    readonly name: string;
    readonly message: string;
    readonly statusCode: number;
    constructor(message: string, statusCode?: number, name?: string);
}
