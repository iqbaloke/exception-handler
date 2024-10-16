// test/ConflictException.test.ts
import { ConflictException } from "../src/exceptions/ConflictException";

describe("ConflictException", () => {
  it("should create a ConflictException with default message", () => {
    const exception = new ConflictException();
    expect(exception.message).toBe("Conflict occurred");
    expect(exception.statusCode).toBe(409);
    expect(exception.name).toBe("ConflictException");
  });

  it("should create a ConflictException with custom message", () => {
    const exception = new ConflictException("Data conflict");
    expect(exception.message).toBe("Data conflict");
    expect(exception.statusCode).toBe(409);
    expect(exception.name).toBe("ConflictException");
  });
});
