// Violação do DIP
//Dependa de abstrações, não de implementações concretas.
class EmailNotifier {
  sendNotification(message: string): void {
    // Envia notificação por e-mail real!
  }
}

class TelegramNotifier {
  constructor() {

  }
  sendNotification(message: string): void {
    // Envia notificação por e-mail real!
  }
}

class NotificationService {
  private emailNotifier: EmailNotifier;
  private telegramNotifier: TelegramNotifier;

  constructor() {
    this.emailNotifier = new EmailNotifier();
    this.telegramNotifier = new TelegramNotifier();
  }

  notify(message: string): void {
    this.emailNotifier.sendNotification(message);
    this.telegramNotifier.sendNotification(message);
  }
}

const notificationService = new NotificationService();
notificationService.notify("Olá, mundo!");