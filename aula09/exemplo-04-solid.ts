// Aplicando ISP
interface Payable {
  calculatePay(): number;
}

interface Reportable {
  reportHours(): number;
}

//violando SRP
interface Persistable {
  save(): void;
}

class Developer implements Payable, Reportable, Persistable {
  calculatePay(): number {
    // Cálculo do salário
    return this.reportHours() * 500;
  }
  reportHours(): number {
    // Relatório de horas trabalhadas
    return 160;
  }
  save(): void {
    // Salva informações no banco de dados
  }
}

class Manager implements Payable, Persistable {
  calculatePay(): number {
    // Cálculo do salário
    return 500_000;
  }
  save(): void {
    // Salva informações no banco de dados
  }
}

const dev = new Developer();
const manager = new Manager();
console.log(`Dev trabalhou ${dev.reportHours()} horas e recebe ${dev.calculatePay()}`)
console.log(`Gerente trabalhou e recebe ${manager.calculatePay()}`)