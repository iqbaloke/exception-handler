// test/NotFoundException.test.ts
import { NotFoundException } from '../src/exceptions/NotFoundException';

describe('NotFoundException', () => {
  it('should create a NotFoundException with default message', () => {
    const exception = new NotFoundException();
    expect(exception.message).toBe('Resource not found');
    expect(exception.statusCode).toBe(404);
    expect(exception.name).toBe('NotFoundException');
  });

  it('should create a NotFoundException with custom message', () => {
    const exception = new NotFoundException('User not found');
    expect(exception.message).toBe('User not found');
    expect(exception.statusCode).toBe(404);
    expect(exception.name).toBe('NotFoundException');
  });
});
