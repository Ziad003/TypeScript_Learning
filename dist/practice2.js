"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    makeSound(sound) {
        console.log("It is doing: ", sound);
    }
}
const dog = new Animal("Dogesh", 23);
console.log(dog);
dog.makeSound("Ghew");
//# sourceMappingURL=practice2.js.map