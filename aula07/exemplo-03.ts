/***
 * Estrutura básica de uma classe de exceção customizada!
 */
class MinhaExcecao extends Error {
  public readonly code: number;
  constructor(message: string, code: number) {
    super(message);
    this.name = "Nome diferente da classe";
    this.message = `minha mensagem customizada de código ${code}: \n${message}`
    this.code = code
    Error.captureStackTrace(this, this.constructor);
  }

  displayError() {
    console.log("mostra o erro simplificado")
  }
}

function interna() {
  // throw new Error("Js Exception")
  throw new MinhaExcecao("BranchID não existe!", 999);
}

function externa() {
  interna()
}

try {
  externa();
} catch (error) {
  // console.error(error)
  if (error instanceof MinhaExcecao) {
    console.error(error.stack)
    console.error("Meu código de error", error.code)
    error.displayError()
  }
} finally {
  console.log('Aqui sempre será executado independente se deu certo ou não!')
}

console.log(
  "Agora será executada! Pois tratamos a exceção!",
);
