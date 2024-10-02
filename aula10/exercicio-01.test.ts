import { strict as assert } from "node:assert";
import { test } from "node:test";

function validatePassword(password: string): boolean {
  // return false;                                          // 1. Implementação inicial
  // return password.length >= 8;                           // 2. Checando tamanho da string
  // return password.length >= 8 && /[A-Z]/.test(password); // 3. Checando letra maiúscula
  // return password.length >= 8 &&                         // 4. Checando números
  //   /[A-Z]/.test(password) &&
  //   /\d/.test(password);
  // return password.length >= 8 &&                         // 5. Checando espaços
  //   /[A-Z]/.test(password) &&
  //   /\d/.test(password) &&
  //   !/\s/.test(password);

  // Versão final - Refatorada
  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasNoSpaces = !/\s/.test(password);
  return password.length >= minLength &&
    hasUpperCase &&
    hasNumber &&
    hasNoSpaces;
}

test('password should be at least 8 characters long', () => {
  assert.equal(validatePassword('short'), false);
  //1. Precisou ser ajustado com a nova regra de letras maiúsculas!
  // assert.equal(validatePassword('longenough'), true);
  //2. Precisou ser ajustado com a nova regra de número 
  // assert.equal(validatePassword('longEnough'), true);
  assert.equal(validatePassword('longEnough1'), true);
});

test('password should contain at least one uppercase letter', () => {
  assert.equal(validatePassword('onlylowercase'), false);

  //1. Precisou ser ajustado com a nova regra de número 
  // assert.equal(validatePassword('WithUppercase'), true);
  assert.equal(validatePassword('WithUppercase2'), true);
});

test('password should contain at least one number', () => {
  assert.equal(validatePassword('NoNumbersHere'), false);
  assert.equal(validatePassword('With1Number'), true);
});

test('password should not contain spaces', () => {
  assert.equal(validatePassword('Has Spaces1'), false);
  assert.equal(validatePassword('NoSpacesHere1'), true);
});

test('valid password', () => {
  assert.equal(validatePassword('ValidP@ssw0rd'), true);
});