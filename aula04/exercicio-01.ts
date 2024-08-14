class Transportadora {
  calculaValorFrete(valorDaMercadoria: number, frete: Frete): number {
    return frete.calcula(valorDaMercadoria);
  }
}

abstract class Frete {
  abstract calcula(valorDaMercadoria: number): number;
}

class Correios extends Frete {
  private percentual = 0.15;
  override calcula(valorDaMercadoria: number): number {
    return valorDaMercadoria * this.percentual;
  }
}

class Loggi extends Frete {
  private valorFrete = 0;
  constructor(valorFrete: number) {
    super();
    this.valorFrete = valorFrete;
  }

  override calcula(valorDaMercadoria: number): number {
    return this.valorFrete;
  }
}

const tranportadora = new Transportadora()
const correios = new Correios()
//Este valor pode vir de uma configuração salva no banco de dados
const loggi = new Loggi(35)
const valorMercadorias = 100
console.log(`Para transportar mercadorias no valor R$ ${valorMercadorias} o frete fica em R$ ${tranportadora.calculaValorFrete(valorMercadorias, loggi)}`)
