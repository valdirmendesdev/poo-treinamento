import assert from 'assert';
import { describe, it, mock } from 'node:test';
import { UserService, EmailService, UserRepository } from './exemplo-01-components';

describe('UserService', () => {
  // Exemplo Mock
  it('[MOCK] deve utilizar mock para verificar se e-mail foi enviado', async () => {
    //Arrange
    const mockEmailService: EmailService = {
      sendWelcomeEmail: async (email: string) => { }
    };
    const mockUserRepository: UserRepository = {
      exists: async () => false,
      save: async () => { },
      getAllEmails: async () => []
    };
    //Utilizando apoio de framework ou lib
    const existsMock = mock.method(mockUserRepository, 'exists')
    const userService = new UserService(mockEmailService, mockUserRepository);
    let emailSent = false;
    //Roots
    mockEmailService.sendWelcomeEmail = async (email: string) => {
      emailSent = true;
    };
    //Act
    await userService.registerUser('test@example.com', 'password');
    //Assert
    assert.strictEqual(existsMock.mock.callCount(), 1);
    assert.strictEqual(emailSent, true);
  });

  // Exemplo Stub
  it('[STUB] deve utilizar stub para retornar dados pré-definidos', async () => {
    const dummyEmailService: EmailService = {
      sendWelcomeEmail: async (email: string) => { }
    };
    const stubUserRepository: UserRepository = {
      exists: async () => false,
      save: async () => { },
      getAllEmails: async () => ['user1@example.com', 'user2@example.com']
    };
    const userService = new UserService(dummyEmailService, stubUserRepository);
    const emails = await userService.getUserEmails();
    assert.deepStrictEqual(emails, ['user1@example.com', 'user2@example.com']);
  });

  // Exemplo Fake
  it('[FAKE] deve utilizar fake para simular um repositório de dados', async () => {
    //Implementação real de comportamentos
    class FakeUserRepository implements UserRepository {
      private users: Map<string, string> = new Map();
      async exists(email: string): Promise<boolean> {
        return this.users.has(email);
      }
      async save(email: string, password: string): Promise<void> {
        this.users.set(email, password);
      }
      async getAllEmails(): Promise<string[]> {
        return Array.from(this.users.keys());
      }
    }
    const fakeUserRepository = new FakeUserRepository();
    const dummyEmailService: EmailService = {
      sendWelcomeEmail: async (email: string) => { }
    };
    const userService = new UserService(dummyEmailService, fakeUserRepository);
    await userService.registerUser('user1@example.com', 'password1');
    await userService.registerUser('user2@example.com', 'password2');
    await userService.registerUser('user3@example.com', 'password3');
    const emails = await userService.getUserEmails();
    assert.deepStrictEqual(emails, ['user1@example.com', 'user2@example.com', 'user3@example.com']);
  });

  // Exemplo Spy
  it('[SPY] deve usar spy para rastrear chamadas de método', async () => {
    class SpyEmailService implements EmailService {
      public emailsSent: string[] = [];
      //Root
      async sendWelcomeEmail(email: string): Promise<void> {
        this.emailsSent.push(email);
      }
    }
    const spyEmailService = new SpyEmailService();
    const stubUserRepository: UserRepository = {
      exists: async () => false,
      save: async () => { },
      getAllEmails: async () => []
    };
    const userService = new UserService(spyEmailService, stubUserRepository);
    await userService.registerUser('user1@example.com', 'password1');
    await userService.registerUser('user2@example.com', 'password2');
    await userService.registerUser('user3@example.com', 'password2');
    assert.deepStrictEqual(spyEmailService.emailsSent, ['user1@example.com', 'user2@example.com', 'user3@example.com']);
  });

  // Exemplo Dummy
  it('[DUMMY] deve usar objeto dummy quando o parâmetro não for usado, mas é obrigatório', async () => {
    const dummyEmailService: EmailService = {
      sendWelcomeEmail: async (email: string) => {
        throw new Error('Este método não deveria ser chamado neste teste');
      }
    };
    const userRepository: UserRepository = {
      exists: async () => true, // Simula a existência do usuário no banco [STUB]
      save: async () => { },
      getAllEmails: async () => []
    };
    const userService = new UserService(dummyEmailService, userRepository);
    const result = await userService.registerUser('existing@example.com', 'password');
    assert.strictEqual(result, false);
  });
});