// Violação do Single Responsibility Principle (SRP)
// Uma classe só dever ter uma razão para mudar.

//Quais problemas que você consegue enxergar aqui?
class User {
  public firstName: string;
  public lastName: string;
  public email: string;

  constructor(firstName: string, lastName: string, email: string) {
    console.log("creating the user object")
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }

  public getFullName(): string {
    return `${this.firstName} ${this.lastName}`
  }

  getIdade(): number {
    return 0;
  }

  public saveToDatabase(): void {
    // Lógica para salvar no banco de dados
    // Acoplamento com banco de dados - string de conexão
    console.log("saving to database")
  }

  public sendEmail(): void {
    // Lógica para enviar e-mail
    // Acoplamento com servidor de e-mail - dados de servidor de e-mail
    console.log("sending email")
  }
}

const user = new User("John", "Doe", "johndoe@example.com")
user.saveToDatabase()
user.sendEmail()

//Refatoração NÃO pode acrescentar nada de funcionalidades!
//Tudo que funcionava tem que funcionar "exatamente" igual como antes da refatoração

// Considerar User como uma classe exclusiva de representação do usuário
// Criar uma [não criaria interface?] e uma classe que representa o banco de dados
// Criar uma classe que representa o servidor e/ou envio de e-mail