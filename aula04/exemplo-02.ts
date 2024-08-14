//Frete [Peso e tamanho] => Acréscimo
//Desconto => decréscimo
// 1 - Baseado forma de pagamento
// 2 - Cupom 
// 3 - Promocao Sazonal (Black Friday)
class Pedido {
  private totalBruto: number;

  constructor(totalBruto: number) {
    this.totalBruto = totalBruto;
  }

  calculaTotal(acrescimos: Acrescimo[], descontos: Desconto[]): number {
    let valorTotalCalculado: number = this.totalBruto;
    for (const desconto of descontos) {
      valorTotalCalculado = desconto.calcularNovoValorTotal(valorTotalCalculado);
    }
    for (const acrescimo of acrescimos) {
      valorTotalCalculado = acrescimo.calcularNovoValorTotal(valorTotalCalculado);
    }
    return valorTotalCalculado;
  }
}

abstract class Acrescimo {
  abstract calcularNovoValorTotal(valorTotal: number): number;
}

class Frete extends Acrescimo {
  override calcularNovoValorTotal(valorTotal: number): number {
    console.log("Frete")
    return valorTotal * 1.1;
  }
}

abstract class Desconto {
  abstract calcularNovoValorTotal(valorTotal: number): number;
}

class DescontoAVista extends Desconto {
  override calcularNovoValorTotal(valorTotal: number): number {
    console.log("Desconto a vista")
    return valorTotal * 0.95;
  }
}

//BEMVINDO10
class DescontoCupom extends Desconto {
  override calcularNovoValorTotal(valorTotal: number): number {
    console.log("Desconto cupom")
    if (valorTotal < 10) {
      return valorTotal;
    }
    return valorTotal - 10;
  }
}

class DescontoBlackFriday extends Desconto {
  override calcularNovoValorTotal(valorTotal: number): number {
    console.log("Desconto Black Friday")
    const dataAtual = new Date()
    if (dataAtual.getMonth() != 10) {
      return valorTotal;
    }
    return valorTotal * 0.9;
  }
}

//Execução
console.log("Valor inicial do meu pedido", 100)
const pedido = new Pedido(100)

//Acréscimos
const frete = new Frete()
const acrescimos: Acrescimo[] = []
acrescimos.push(frete)

//Descontos
// const descontoAVista = new DescontoAVista()
const descontoCupom = new DescontoCupom()

const descontos: Desconto[] = []
// descontos.push(descontoAVista)
descontos.push(descontoCupom)

const valorTotalPedido = pedido.calculaTotal(acrescimos, descontos);
console.log("Valor total do meu pedido", valorTotalPedido)