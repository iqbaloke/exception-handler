// test/BaseException.test.ts
import { BaseException } from '../src/exceptions/BaseException';

describe('BaseException', () => {
  it('should create a BaseException with default values', () => {
    const exception = new BaseException('Something went wrong');
    expect(exception.message).toBe('Something went wrong');
    expect(exception.statusCode).toBe(500);
    expect(exception.name).toBe('BaseException');
  });

  it('should create a BaseException with custom status code and name', () => {
    const exception = new BaseException('Custom error', 400, 'CustomException');
    expect(exception.message).toBe('Custom error');
    expect(exception.statusCode).toBe(400);
    expect(exception.name).toBe('CustomException');
  });
});
