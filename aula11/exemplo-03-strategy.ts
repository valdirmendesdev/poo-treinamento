interface PaymentStrategy {
    pay(amount: number): void;
}

class CashPayment implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`Pagando R$ ${amount} em dinheiro`);
    }
}

class CreditCardPayment implements PaymentStrategy {
    constructor(private cardNumber: string) { }

    pay(amount: number): void {
        console.log(`Pagando R$ ${amount} com cartão de crédito ${this.cardNumber}`);
    }
}

class PayPalPayment implements PaymentStrategy {
    constructor(private email: string) { }

    pay(amount: number): void {
        console.log(`Pagando R$ ${amount} com PayPal (${this.email})`);
    }
}

class PixPayment implements PaymentStrategy {

    constructor(private chavePix: string, private tipoChave: string = "cpf") { }

    pay(amount: number): void {
        console.log(`Pagando R$ ${amount} com pix`);
        this.showMyInfo()
    }

    showMyInfo() {
        console.log(`chavePix: ${this.chavePix} tipoChave: ${this.tipoChave}`);
    }
}

class ShoppingCart {
    private paymentStrategy: PaymentStrategy;

    constructor(strategy: PaymentStrategy) {
        this.paymentStrategy = strategy
    }

    setPaymentStrategy(strategy: PaymentStrategy): void {
        //Rules
        if (strategy === null) {
            throw new Error("Strategy cannot be null");
        }
        this.paymentStrategy = strategy;
    }

    checkout(amount: number): void {
        this.paymentStrategy.pay(amount);
    }
}

// Uso
const cart = new ShoppingCart(new CashPayment());
cart.checkout(100);

// Cliente escolhe pagar com cartão de crédito
cart.setPaymentStrategy(new CreditCardPayment("1234-5678-9012-3456"));
cart.checkout(100);

// Cliente muda de ideia e decide usar PayPal
cart.setPaymentStrategy(new PayPalPayment("usuario@email.com"));
cart.checkout(100);

cart.setPaymentStrategy(new PixPayment("email@email.com", "email"));
cart.checkout(100);
