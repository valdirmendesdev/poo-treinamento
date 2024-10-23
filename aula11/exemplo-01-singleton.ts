class ConfigManager {
    //Singleton - instância estática
    private static instance: ConfigManager;
    private settings: Map<string, any>;

    //Construtor privado!
    //Garante que uma instância só poderá ser criada através
    //do método `getInstance`
    private constructor() {
        this.settings = new Map();
        this.settings.set("theme", "light");
    }

    public static getInstance(): ConfigManager {
        if (!ConfigManager.instance) {
            console.log("Primeira vez que foi chamado!")
            ConfigManager.instance = new ConfigManager();
        }
        return ConfigManager.instance;
    }

    public setSetting(key: string, value: any): void {
        this.settings.set(key, value);
    }

    public getSetting(key: string): any {
        return this.settings.get(key);
    }
}

// Uso
//Arquivo 1
const config1 = ConfigManager.getInstance();
// const config1 = new ConfigManager();
config1.setSetting("theme", "dark");


//Arquivo 2
const config2 = ConfigManager.getInstance();
// const config2 = new ConfigManager()
console.log(config2.getSetting("theme")); // Saída: "dark"