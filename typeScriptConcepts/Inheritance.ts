class Persons1 {
    name: string;
    age: number;
    hobbies: string[];

    constructor(name: string, age: number, hobbies: string[]) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
}

class Student extends Persons1 {
    grade: number;

    constructor(name: string, age: number, hobbies: string[], grade: number) {
        super(name, age, hobbies);
        this.grade = grade;
    }
    introduce():string{
        return `hi my name is ${this.name} my age is ${this.age} my hobbies are ${this.hobbies} and i study in grade ${this.grade}`
    }
}

const p3 = new Persons1("Vinod", 12, ["singing", "painting"]);
const p4 = new Student("Rakesh", 30, ["guitar", "Reading"],10);
console.log(p3);
console.log(p4);
