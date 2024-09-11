// Aplicando DIP
interface Notifier {
  sendNotification(message: string): void;
}

class EmailNotifier implements Notifier {
  sendNotification(message: string): void {
    // Envia notificação por e-mail
  }
}

class SMSNotifier implements Notifier {
  sendNotification(message: string): void {
    // Envia notificação por SMS
  }
}

class NotificationService {
  constructor(private notifier: Notifier) { }

  notify(message: string): void {
    this.notifier.sendNotification(message);
  }
}

// Uso
const emailNotifier = new EmailNotifier();
const smsNotifier = new SMSNotifier();

const emailNotificationService = new NotificationService(emailNotifier);
const smsNotificationService = new NotificationService(smsNotifier);