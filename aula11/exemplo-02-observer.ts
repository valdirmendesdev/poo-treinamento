interface Observer {
    update(message: string): void;
}

class Subject {
    private observers: Observer[] = [];

    public addObserver(observer: Observer): void {
        //Rules
        this.observers.push(observer);
    }

    public removeObserver(observer: Observer): void {
        const index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }

    public notifyObservers(message: string): void {
        for (const observer of this.observers) {
            observer.update(message);
        }
    }
}

class UserTimeline implements Observer {
    constructor(private name: string) { }

    update(message: string): void {
        console.log(`${this.name} recebeu a notificação: ${message}`);
    }
}

// Uso
const trendTopic = new Subject();
const user1 = new UserTimeline("Alice");
const user2 = new UserTimeline("Bob");
trendTopic.addObserver(user1);
trendTopic.addObserver(user2);
trendTopic.notifyObservers("Nova postagem disponível!");

const trendTopic1 = new Subject();
const user3 = new UserTimeline("Valdir");
trendTopic1.addObserver(user1);
trendTopic1.addObserver(user3);
trendTopic1.notifyObservers("Outro tópico!");