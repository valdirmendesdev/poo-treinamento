// Aplicando SRP
class User {
  public name: string;
  public email: string;

  constructor(name: string, email: string) {
    console.log("creating the user object")
    this.name = name;
    this.email = email;
  }
}

class UserRepository {
  public saveToDatabase(user: User): void {
    // Lógica para salvar no banco de dados
    console.log("saving to database")
  }
}

class EmailService {
  public send(user: User): void {
    // Lógica para enviar e-mail
    console.log("sending email")
  }
}

const user = new User("John Doe", "johndoe@example.com")
const userRepository = new UserRepository()
const emailService = new EmailService()

userRepository.saveToDatabase(user)
emailService.send(user)