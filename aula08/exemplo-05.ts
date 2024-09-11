// Violação do DIP
//Dependa de abstrações, não de implementações concretas.
class EmailNotifier {
  sendNotification(message: string): void {
    // Envia notificação por e-mail
  }
}

class NotificationService {
  private emailNotifier: EmailNotifier;

  constructor() {
    this.emailNotifier = new EmailNotifier();
  }

  notify(message: string): void {
    this.emailNotifier.sendNotification(message);
  }
}