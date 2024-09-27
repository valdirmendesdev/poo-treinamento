// Aplicando DIP
interface Notifier {
  sendNotification(message: string): void;
}

class EmailNotifier implements Notifier {
  sendNotification(message: string): void {
    console.log("enviando por e-mail")
    // Envia notificação por e-mail
  }
}

class SMSNotifier implements Notifier {
  sendNotification(message: string): void {
    console.log("enviando por sms")
    // Envia notificação por SMS
  }
}

class TelegramNotifier implements Notifier {
  sendNotification(message: string): void {
    console.log("enviando por telegram")
  }
}

class ZapNotifier implements Notifier {
  sendNotification(message: string): void {
    console.log("enviando por ZAP")
  }
}

class NotificationService {
  constructor(private notifier: Notifier) { }

  notify(message: string): void {
    this.notifier.sendNotification(message);
  }
}

class NotificationServiceSingle {
  constructor(private notifier: Notifier[]) { }

  notify(message: string): string[] {
    const result = [];
    for (const notifier of this.notifier) {
      notifier.sendNotification(message);
      result.push(message)
    }
    return result
  }
}

// Uso
const emailNotifier = new EmailNotifier();
const smsNotifier = new SMSNotifier();
const telegramNotifier = new TelegramNotifier();

// const emailNotificationService = new NotificationService(emailNotifier);
// const smsNotificationService = new NotificationService(smsNotifier);
// const telegramService = new NotificationService(new TelegramNotifier());

// emailNotificationService.notify("Olá, mundo!");
// smsNotificationService.notify("Olá, mundo!");
// telegramService.notify("Olá, mundo!");

const notificationService = new NotificationServiceSingle([emailNotifier, smsNotifier, telegramNotifier, new ZapNotifier()]);
const result = notificationService.notify("Olá, mundo!");
if (result.length == 4) {
  console.log("está funcionando")
} else {
  console.log("não está funcionando")
}
