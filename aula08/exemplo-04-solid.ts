// Aplicando ISP
interface Payable {
  calculatePay(): number;
}

interface Reportable {
  reportHours(): number;
}

interface Persistable {
  save(): void;
}

class Developer implements Payable, Reportable, Persistable {
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

class Manager implements Payable, Persistable {
  calculatePay(): number {
    // Cálculo do salário
    return 0;
  }
  save(): void {
    // Salva informações no banco de dados
  }
}