import { Singleton } from './singleton/singleton';
console.log('Ahoy Singleton Pattern!');

const singletonA: Singleton = Singleton.getInstance();
const singletonB: Singleton = Singleton.getInstance();

console.log(singletonA.getRandom === singletonB.getRandom);
console.log(singletonA === singletonB);
singletonA.sayHello();
singletonB.sayHello();
