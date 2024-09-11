import { Sign } from "crypto";

// Aplicando LSP
interface Saveable {
  save(): void;
}

interface Printable {
  print(): void;
}

interface Signable {
  sign(): void;
}

class BaseDocument implements Saveable, Printable {
  constructor(protected id: string, protected content: string) { }

  save(): void {
    console.log(`Salvando documento ${this.id}`);
    // Lógica para salvar o documento
  }

  print(): void {
    console.log(`Imprimindo documento ${this.id}`);
    // Lógica para imprimir o documento
  }
}

class Contract extends BaseDocument implements Signable {
  sign(): void {
    console.log(`Assinando contrato ${this.id} com validação legal`);
    // Lógica específica para assinar contratos
  }
}

class MyReport extends BaseDocument {
  // Não implementa Signable
}

class Invoice extends BaseDocument implements Signable {
  sign(): void {
    console.log(`Assinando fatura ${this.id}`);
    // Lógica para assinar faturas
  }
}

//Funções que respeitam o LSP
function saveAndPrintDocument(doc: Saveable & Printable) {
  doc.save();
  doc.print();
}

function signDocument(doc: Signable) {
  doc.sign();
}

// Uso
const mydoc = new BaseDocument("D001", "Conteúdo do documento")
const contract = new Contract("C001", "Termos do contrato...");
const myReport = new MyReport("R001", "Conteúdo do relatório...");
const invoice = new Invoice("I001", "Detalhes da fatura...");

console.log("*** Depois da Refatoração ***")
saveAndPrintDocument(mydoc);
saveAndPrintDocument(contract);
saveAndPrintDocument(myReport);
saveAndPrintDocument(invoice);
signDocument(contract);
signDocument(invoice);
// signDocument(report); // Isso nem compilaria, evitando erros em tempo de execução


//Caso não seja possível mudar a função que já existia, podemos implementar da seguinte forma
console.log("\n\n*** Utilizando a mesma função que tínhamos antes da refatoração ***\n\n")
function processDocument(doc: BaseDocument | (BaseDocument & Signable)) {
  doc.save();
  doc.print();
  //Em Typescript não é possível checar se um objeto implementa uma interface em tempo de execução
  //No Typescript interfaces só existem durante a transpilação para javascript
  if ('sign' in doc) {
    doc.sign();
  }
}
processDocument(mydoc);
processDocument(contract);
processDocument(myReport);
processDocument(invoice);