// Herança é sinônimo de HIERARQUIA - PAI E FILHOS, ÁRVORE, ORGANOGRAMA - LÍDER E SUBORDINADOS
// abstract => é uma classe somente de modelo!
abstract class Conta {
  public banco: string;
  public agencia: string;
  public numero: string;
  public saldo: number;

  constructor(banco: string, agencia: string, numero: string, saldo: number) {
    this.banco = banco;
    this.agencia = agencia;
    this.numero = numero;
    this.saldo = saldo; //Deveria existir assim?
  }

  sacar(valorDesejado: number): boolean {
    if (this.saldo >= Math.abs(valorDesejado)) {
      this.saldo -= Math.abs(valorDesejado);
      return true;
    }
    return false
  }

  transferir(valorDesejado: number, contaDestino: Conta): boolean {
    if (this.sacar(valorDesejado)) {
      return contaDestino.depositar(valorDesejado, "pix");
    }
    return false
  }

  depositar(valorRecebido: number, tipoDeposito: string): boolean {
    if (valorRecebido <= 0) {
      return false;
    }
    this.saldo += valorRecebido;
    return true
  }

  consultarSaldo(): number {
    return this.saldo;
  }

  abstract exibeInformacoesDoBanco(): string

  static exemplo(): void {
    console.log("Exemplo de método estático em classe abstrata")
  }
}

// Conta => Super classe ou classe mãe
// Eu ganhei TUDO que tem na classe Conta. Inclui atributos e métodos
class ContaCorrente extends Conta {

  exibeInformacoesDoBanco(): string {
    return "Banco Orbit";
  }

  //Typescript -> representa herança
  exibirInformacoesDaConta() {
    console.log("Banco", this.banco)
    console.log("Agência", this.agencia)
    console.log("Número", this.numero)
    console.log("Saldo", this.saldo)
  }
}

class ContaSalario extends Conta {
  exibeInformacoesDoBanco(): string {
    return "Banco Orbit";
  }

  //vai substituir o comportamento que foi recebido da classe mãe!
  // polimorfismo
  // sobreescrita de método ou comportamento
  // Pode mudar tudo!
  // Agregar valor, agregar regras
  override depositar(valorRecebido: number, tipoDeposito: string): boolean {
    if (tipoDeposito != "juridico") { // Conta Salario
      return false;
    }
    //representa que eu estou chamando o método da classe Conta!
    return super.depositar(valorRecebido, tipoDeposito);
  }
}
// //Indeterminado
// const conta = new Conta("nubank", "0001", "xpto", 100)
// console.log("saldo", conta.consultarSaldo())

Conta.exemplo();

// const contaCorrente = new ContaCorrente("nubank", "0001", "xpto", 0)
// const contaSalario = new ContaSalario("nubank", "0001", "xpto-1", 0)
// contaCorrente.depositar(100, "pix")
// contaSalario.depositar(50, "juridico");
// console.log("Tentantiva de transferir da conta corrente para conta salário. Funcionou? ", contaCorrente.transferir(50, contaSalario))
// console.log("Saldo Conta Corrente", contaCorrente.consultarSaldo())
// console.log("Saldo Conta Salario", contaSalario.consultarSaldo())
// console.log("Informações do banco Conta Corrente", contaCorrente.exibeInformacoesDoBanco())
// console.log("Informações do banco Conta Salario", contaSalario.exibeInformacoesDoBanco())