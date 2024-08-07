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
 enum TipoConta {
   CORRENTE,
   SALARIO,
   UNIVERSITARIO
 }

 class Conta {
   public banco: string;
   public agencia: string;
   public numero: string;
   public tipoDaConta: TipoConta;
   public saldo: number;
   public limiteDeDepositos: number = 0; //Universitario

   constructor(banco: string, agencia: string, numero: string, tipoDaConta: TipoConta, saldo: number) {
     this.banco = banco;
     this.agencia = agencia;
     this.numero = numero;
     this.tipoDaConta = tipoDaConta;
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
     if (this.tipoDaConta == TipoConta.SALARIO && tipoDeposito != "juridico") { // Conta Salario
       return false;
     }
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

 const contaCorrente = new Conta("nubank", "0001", "xpto", TipoConta.CORRENTE, 0)
 const contaSalario = new Conta("nubank", "0001", "xpto-1", TipoConta.SALARIO, 0)
 contaCorrente.depositar(100, "pix")
 contaSalario.depositar(50, "juridico");
 contaCorrente.transferir(50, contaSalario)
 console.log("Saldo CC", contaCorrente.consultarSaldo())
 console.log("Saldo CS", contaSalario.consultarSaldo())