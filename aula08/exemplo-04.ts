// Violação do ISP
//Muitas interfaces específicas são melhores do que uma interface geral.
interface Employee {
  calculatePay(): number;
  reportHours(): number;
  save(): void;
}

class Developer implements Employee {
  calculatePay(): number {
    // Cálculo do salário
    return 0
  }
  reportHours(): number {
    // Relatório de horas trabalhadas
    return 0;
  }
  save(): void {
    // Salva informações no banco de dados
  }
}

class Manager implements Employee {
  calculatePay(): number {
    // Cálculo do salário
    return 0;
  }
  reportHours(): number {
    // Relatório de horas trabalhadas
    return 0;
  }
  save(): void {
    // Salva informações no banco de dados
  }
}
