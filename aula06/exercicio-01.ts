/**
 * Vamos construir um programa que simule um relatório de vendas. Deve ser possível substituir, de forma simples, a origem dos dados (banco de dados, arquivo texto, RFC, SOAP..)
Requisitos:
Construir uma classe que represente o relatório
A origem de dados deve ser abstraída por uma interface
Cada origem de dados deve ser representada por uma classe
Precisamos ter pelo menos 2 origens de dados diferentes
Deve ser possível passar a origem dos dados para geração do relatório
O relatório deve mostrar o código do item, nome do item, valor unitário, quantidade vendida e subtotal do item
 */

//Classe de domínio, classe de operação do sistema!
//Complexo e difícil de mudar!
class OperationalItem {
    code: string;

    name: string;

    unit_value: number;

    quantity: number;

    constructor(code: string, name: string, unit_value: number, quantity: number) {
        this.code = code;
        this.name = name;
        this.unit_value = unit_value;
        this.quantity = quantity;
    }

    get subtotal(): number {
        return this.quantity * this.unit_value;
    }
}

interface SalesDataProvider {
    getData(): OperationalItem[]
}

//Classe utilizada somente no relatório
//Simples e fácil de mudar! 
class SalesReportItem {
    code: string;

    name: string;

    unit_value: number;

    quantity: number;

    constructor(code: string, name: string, unit_value: number, quantity: number) {
        this.code = code;
        this.name = name;
        this.unit_value = unit_value;
        this.quantity = quantity;
    }

    get subtotal(): number {
        return this.quantity * this.unit_value;
    }

    addQuantity(newQuantity: number) {
        this.quantity += newQuantity
    }

    addUnitValue(newValue: number) {
        this.unit_value = (this.unit_value + newValue) / 2
    }
}

class SalesReport {
    private dataProvider: SalesDataProvider;

    constructor(provider: SalesDataProvider) {
        this.dataProvider = provider;
    }

    generate(): SalesReportItem[] {
        let reportOutput: Map<string, SalesReportItem> = new Map<string, SalesReportItem>();
        for (const salesItem of this.dataProvider.getData()) {
            if (reportOutput.has(salesItem.code)) {
                const salesReportItem = reportOutput.get(salesItem.code)
                salesReportItem?.addQuantity(salesItem.quantity)
                salesReportItem?.addUnitValue(salesItem.unit_value)
                continue //early return
            }
            reportOutput.set(salesItem.code, new SalesReportItem(salesItem.code, salesItem.name, salesItem.unit_value, salesItem.quantity))
        }
        return Array.from(reportOutput.values())
    }
}

class SQLProvider implements SalesDataProvider {
    getData(): OperationalItem[] {
        /***
         * select * from mytable where ....
         */
        console.log('*** SQL Provider ***')
        const items: OperationalItem[] = [];
        for (let i = 1; i <= 10; i++) {
            items.push(new OperationalItem(
                `${i % 2}`,
                `item ${i}`,
                i * 10,
                i,
            ))
        }
        return items;
    }
}

class CSVProvider implements SalesDataProvider {
    getData(): OperationalItem[] {
        /***
         * Read all lines of file
         * fs.Open(...)....
         */
        console.log('*** CSV Provider ***')
        const linesOfFile: string[] = [
            '1,Item 1,10,1',
            '2,Item 2,15,1',
            '3,Item 3,20,1',
            '4,Item 4,25,1',
            '5,Item 5,30,1',
            '6,Item 6,35,1',
            '7,Item 7,40,1',
            '8,Item 8,45,1',
            '9,Item 9,50,1',
            '10,Item 10,10,55,1'
        ]
        const items: OperationalItem[] = [];
        for (const line of linesOfFile) {
            const [codigo, nome, valor_unitario, quantidade] = line.split(',')
            items.push(new OperationalItem(
                codigo,
                nome,
                parseFloat(valor_unitario),
                parseFloat(quantidade),
            ))
        }
        return items;
    }
}

const report = new SalesReport(new SQLProvider())
const output = []
for (const item of report.generate()) {
    output.push({
        ...item,
        subtotal: item.subtotal,
    })
}
console.table(output)