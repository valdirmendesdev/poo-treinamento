export interface EmailService {
  sendWelcomeEmail(email: string): Promise<void>;
}

export interface UserRepository {
  exists(email: string): Promise<boolean>;
  save(email: string, password: string): Promise<void>;
  getAllEmails(): Promise<string[]>;
}

export class UserService {
  constructor(
    private emailService: EmailService,
    private userRepository: UserRepository
  ) { }

  async registerUser(email: string, password: string): Promise<boolean> {
    if (await this.userRepository.exists(email)) {
      return false;
    }
    await this.userRepository.save(email, password);
    await this.emailService.sendWelcomeEmail(email);
    return true;
  }

  async getUserEmails(): Promise<string[]> {
    return this.userRepository.getAllEmails();
  }
}