class Persons{
    name:string;
    age:number;
    hobbies:string[]

constructor(name:string,age:number,hobbies:string[]){
    this.name=name;
    this.age=age;
    this.hobbies=hobbies;
}
}

const p1=new Persons("Vinod",12,["singing","painting"]);
const p2=new Persons("Rakesh",30,["guitar","Reading"]);
console.log(p1);
console.log(p2);

