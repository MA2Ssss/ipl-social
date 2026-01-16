import { isValidEmail } from "../src/emailValidator";

describe("Validation email", () => {

  test("email valide", () => {
    expect(isValidEmail("test@example.com")).toBe(true);
  });

  test("email sans @", () => {
    expect(isValidEmail("testexample.com")).toBe(false);
  });

  test("email avec espace", () => {
    expect(isValidEmail("test @example.com")).toBe(false);
  });

  test("email sans point dans le domaine", () => {
    expect(isValidEmail("test@examplecom")).toBe(false);
  });

  test("email avec point à la fin", () => {
    expect(isValidEmail("test@example.")).toBe(false);
  });

  test("email sans texte avant @", () => {
    expect(isValidEmail("@example.com")).toBe(false);
  });

  test("email sans texte après @", () => {
    expect(isValidEmail("test@")).toBe(false);
  });

});
