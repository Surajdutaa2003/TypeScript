class Persons2 {
    name: string;
    age: number;
    protected hobbies: string[]; // Use `protected` if subclasses need access.

    constructor(name: string, age: number, hobbies: string[]) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
}

class Student1 extends Persons2 {
    grade: number;

    constructor(name: string, age: number, hobbies: string[], grade: number) {
        super(name, age, hobbies); // Corrected super call
        this.grade = grade;
    }

    introduce(): string {
        return `Hi, my name is ${this.name}. My age is ${this.age}, my hobbies are ${this.hobbies.join(", ")}, and I study in grade ${this.grade}.`;
    }
}

// Creating instances
const p5 = new Persons2("Vinod", 12, ["singing", "painting"]);
const p6 = new Student1("Rakesh", 30, ["guitar", "reading"], 10);

console.log(p5); // Logs the `Persons2` object
console.log(p6.introduce()); // Correctly calls the `introduce` method
                                                                                                             