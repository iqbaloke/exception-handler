// test/ValidationException.test.ts
import { ValidationException } from "../src/exceptions/ValidationException";

describe("ValidationException", () => {
  it("should create a ValidationException with default message and errors", () => {
    const errors = [{ field: "email", message: "Invalid email" }];
    const exception = new ValidationException(errors);
    expect(exception.message).toBe("Validation failed");
    expect(exception.statusCode).toBe(400);
    expect(exception.name).toBe("ValidationException");
    expect(exception.errors).toEqual(errors);
  });

  it("should create a ValidationException with custom message", () => {
    const errors = [{ field: "password", message: "Password is too short" }];
    const exception = new ValidationException(
      errors,
      "Password validation failed"
    );
    expect(exception.message).toBe("Password validation failed");
    expect(exception.errors).toEqual(errors);
  });
});
