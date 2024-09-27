import { strict as assert } from "node:assert";
import { test } from "node:test";

//Script de automação do teste que eu já faria
// Calculadora e método somar

class Calculadora {
  somar(a: number, b: number): number {
    return a + b;
  }
}

test("soma de dois números inteiros positivos", () => {
  //Arrange ou Given
  const minhaCalculadora = new Calculadora()
  //Act ou When
  const resultado = minhaCalculadora.somar(2, 2)
  //Assert ou Then
  assert.strictEqual(resultado, 4)
})

test("soma de dois números inteiros negativos", () => {
  //Arrange ou Given
  const minhaCalculadora = new Calculadora()
  //Act ou When
  const resultado = minhaCalculadora.somar(-2, -2)
  //Assert ou Then
  assert.strictEqual(resultado, -4)
})

class CalculadoraQueDivideNumeros {
  dividir(a: number, b: number): number {
    if (b == 0) {
      return -999_999_999
    }
    return a / b;
  }
}

//TDD
test("divisão de números inteiros positivos que retorna um valor ímpar", () => {
  //Arrange, Given, cenário
  const minhaCalculadora = new CalculadoraQueDivideNumeros()
  //Act, When, ação
  const resultado = minhaCalculadora.dividir(2, 2)
  //Assert, Then, verificação
  assert.strictEqual(resultado, 1)
})

test("divisão de números inteiros positivos que retorna um valor par", () => {
  //Arrange, Given, cenário
  const minhaCalculadora = new CalculadoraQueDivideNumeros()
  //Act, When, ação
  const resultado = minhaCalculadora.dividir(8, 4)
  //Assert, Then, verificação
  assert.strictEqual(resultado, 2)
})

test("divisão de um número inteiro por zero", () => {
  //Arrange, Given, cenário
  const minhaCalculadora = new CalculadoraQueDivideNumeros()
  //Act, When, ação
  const resultado = minhaCalculadora.dividir(3, 0)
  //Assert, Then, verificação
  assert.strictEqual(resultado, -999_999_999)
})