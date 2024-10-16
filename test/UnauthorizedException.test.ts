// test/UnauthorizedException.test.ts
import { UnauthorizedException } from "../src/exceptions/UnauthorizedException";

describe("UnauthorizedException", () => {
  it("should create an UnauthorizedException with default message", () => {
    const exception = new UnauthorizedException();
    expect(exception.message).toBe("Unauthorized access");
    expect(exception.statusCode).toBe(401);
    expect(exception.name).toBe("UnauthorizedException");
  });

  it("should create an UnauthorizedException with custom message", () => {
    const exception = new UnauthorizedException("Token is invalid");
    expect(exception.message).toBe("Token is invalid");
    expect(exception.statusCode).toBe(401);
    expect(exception.name).toBe("UnauthorizedException");
  });
});
