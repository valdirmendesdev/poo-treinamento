interface SalaryCalculatable {
    calculateSalary(): number;
}

class FullTimeEmployee implements SalaryCalculatable {
    constructor(public type: string, public monthlySalary: number) { }

    calculateSalary(): number {
        return this.monthlySalary;
    }
}

class PartTimeEmployee implements SalaryCalculatable {
    constructor(public type: string, public hourlyRate: number, public hoursWorked: number) { }

    calculateSalary(): number {
        return this.hourlyRate * this.hoursWorked;
    }
}

class Contractor implements SalaryCalculatable {
    constructor(public type: string, public contractAmount: number) { }

    calculateSalary(): number {
        return this.contractAmount / 12;
    }
}

class SalesPerson implements SalaryCalculatable {
    constructor(public type: string, public monthlySalary: number, public bonus: number) { }

    calculateSalary(): number {
        return this.monthlySalary + this.bonus;
    }
}

class SalaryCalculator {
    calculateSalary(employee: SalaryCalculatable): number {
        return employee.calculateSalary();
    }
}

const employee_1 = new FullTimeEmployee("full-time", 1000);
const employee_2 = new PartTimeEmployee("part-time", 10, 40);
const employee_3 = new Contractor("contract", 1000);
const employee_4 = new SalesPerson("sales person", 1000, 100);


const calculator = new SalaryCalculator();
console.log(`Employee ${employee_1.type} salary: ${calculator.calculateSalary(employee_1)}`);
console.log(`Employee ${employee_2.type} salary: ${calculator.calculateSalary(employee_2)}`);
console.log(`Employee ${employee_3.type} salary: ${calculator.calculateSalary(employee_3)}`);
console.log(`Employee ${employee_4.type} salary: ${calculator.calculateSalary(employee_4)}`);