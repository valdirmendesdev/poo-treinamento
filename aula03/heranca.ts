/**
 * Contexto: Banco
 * Problema: Eu preciso representar conta bancária considerando os tipos de conta
 * que o banco suporta
 * Inicialmente: Conta Corrente e Conta Salário
 */
/**
 * O que existe em comum entre a conta corrente e conta salário? Abstração!
 * Existe diferença de conta para pessoa física e jurídica?
 * O que eu posso fazer em cada conta? [Ações]
 * Se é possível ter as duas contas ao mesmo tempo?
 * Se tem cartão crédito?
 * Dependentes?
 * Quais dados que precisam ter na conta corrente e na conta salário?
 * O que define uma conta?
 * Banco, Número da conta, Agência, tipo da conta, cliente, saldo, vínculos?, contrato, 
 * Tem cheque especial? ou pode ter? Se sim, para qual tipo de conta?
 */

// Herança é sinônimo de HIERARQUIA - PAI E FILHOS, ÁRVORE, ORGANOGRAMA - LÍDER E SUBORDINADOS
class Conta {
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
}

// Conta => Super classe ou classe mãe
// Eu ganhei TUDO que tem na classe Conta. Inclui atributos e métodos
class ContaCorrente extends Conta { //Typescript -> representa herança
  exibirInformacoesDaConta() {
    console.log("Banco", this.banco)
    console.log("Agência", this.agencia)
    console.log("Número", this.numero)
    console.log("Saldo", this.saldo)
  }
}

class ContaSalario extends Conta {

  //vai substituir o comportamento que foi recebido da classe mãe!
  // polimorfismo
  // sobreescrita de método ou comportamento
  // Pode mudar tudo!
  // Agregar valor, agregar regras
  depositar(valorRecebido: number, tipoDeposito: string): boolean {
    if (tipoDeposito != "juridico") { // Conta Salario
      return false;
    }
    //representa que eu estou chamando o método da classe Conta!
    return super.depositar(valorRecebido, tipoDeposito);
  }
}


const contaCorrente = new ContaCorrente("nubank", "0001", "xpto", 0)
const contaSalario = new ContaSalario("nubank", "0001", "xpto-1", 0)
contaCorrente.depositar(100, "pix")
contaSalario.depositar(50, "juridico");
console.log("Tentantiva de transferir da conta corrente para conta salário. Funcionou? ", contaCorrente.transferir(50, contaSalario))
console.log("Saldo CC", contaCorrente.consultarSaldo())
console.log("Saldo CS", contaSalario.consultarSaldo())
// contaCorrente.exibirInformacoesDaConta()