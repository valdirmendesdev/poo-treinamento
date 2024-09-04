class ErroDeNegocio extends Error {
  constructor(message: string) {
    super(message)
  }
}

class Produto {
  constructor(private _quantidadeDeItems: number) { }

  baixarEstoque(quantidadeSolicitada: number): boolean {
    if (quantidadeSolicitada > this._quantidadeDeItems) {
      // throw new ErroDeNegocio("quantidade solicitada é maior do que quantidade de itens disponível");
      return false
    }
    //...Se deu certo
    return true
  }
}

const meuProduto = new Produto(10)
const deuCerto = meuProduto.baixarEstoque(11)
if (!deuCerto) {
  console.log("avisar para o usuário e parar o programa!")
}
console.log('Nunca vai ser executada!')