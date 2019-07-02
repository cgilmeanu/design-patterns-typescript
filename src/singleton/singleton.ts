export class Singleton {
    private static instance: Singleton;
    private constructor() {}

    public static getInstance = (): Singleton => {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    };

    private randomNumber: Number = Math.random();

    public sayHello() {
        console.log('Hello from Singleton!');
    }

    public getRandom = (): Number => this.randomNumber;
}
