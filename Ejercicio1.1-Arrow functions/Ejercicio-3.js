
class Person {
    constructor (name) {
        this.name = name;
    }

     greet = () => console.log( `Hola, ${this.name}`)
    
}

const person = new Person('Raúl Bricio');
person.greet(); 
