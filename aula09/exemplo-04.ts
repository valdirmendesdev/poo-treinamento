// Violação do ISP
//Muitas interfaces específicas são melhores do que uma interface geral.
interface Employee {
  calculatePay(): number;
  reportHours(): number;
  save(): void; //Violação do SRP
}

class Developer implements Employee {
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

class Manager implements Employee {
  calculatePay(): number {
    // Cálculo do salário
    return 500_000;
  }
  reportHours(): number {
    // Relatório de horas trabalhadas
    throw new Error("Gerente não aponta horas trabalhadas");
  }
  save(): void {
    // Salva informações no banco de dados
    // Este método não precisa ser implementado para este cenário
  }
}

const dev = new Developer();
const manager = new Manager();
console.log(`Dev trabalhou ${dev.reportHours()} horas e recebe ${dev.calculatePay()}`)
console.log(`Gerente trabalhou ${manager.reportHours()} horas e recebe ${manager.calculatePay()}`)
