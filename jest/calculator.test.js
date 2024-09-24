const calculator = require("./calculator");

describe("Teste para a calculadora", () => {
  test("A soma de 2 + 2 tem que ser 4", () => {
    const minhaSoma = calculator.sum(2, 2);
    expect(minhaSoma).toBe(4);
  });

  test("A subtração de 2 - 2 tem quer ser 0", () => {
    expect(calculator.subtr(2, 2)).toBe(0);
  });

  test("A multiplicação de 2 vezes 2 tem que ser 4", () => {
    expect(calculator.mult(2, 2)).toBe(4);
  });

  test("A divisão de 2 dividido por 2 tem que ser 1", () => {
    expect(calculator.div(2, 2)).toBe(1);
  });
});
