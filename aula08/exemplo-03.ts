// Violação do LSP
// Objetos de uma superclasse devem ser substituíveis por objetos de suas subclasses sem afetar a corretude do programa.
class MyDocument {
  id: string;
  content: string;

  constructor(id: string, content: string) {
    this.id = id;
    this.content = content;
  }

  save(): void {
    console.log(`Salvando documento ${this.id}`);
    // Lógica para salvar o documento
  }

  print(): void {
    console.log(`Imprimindo documento ${this.id}`);
    // Lógica para imprimir o documento
  }

  sign(): void {
    console.log(`Assinando documento ${this.id}`);
    // Lógica para assinar o documento
  }
}

class Contract extends MyDocument {
  sign(): void {
    console.log(`Assinando contrato ${this.id} com validação legal`);
    // Lógica específica para assinar contratos
  }
}

class MyReport extends MyDocument {
  sign(): void {
    // Relatórios não podem ser assinados
    throw new Error("Relatórios não podem ser assinados");
  }
}

// Esta função viola o LSP porque não pode trabalhar com todos os tipos de Document
function processDocument(doc: MyDocument) {
  doc.save();
  doc.print();
  doc.sign(); // Isso vai falhar para Report
}

const doc = new MyDocument("D001", "Conteúdo do documento");
const contract = new Contract("C001", "Termos do contrato...");
const myReport = new MyReport("R001", "Conteúdo do relatório...");

processDocument(doc);
processDocument(contract);
processDocument(myReport);
