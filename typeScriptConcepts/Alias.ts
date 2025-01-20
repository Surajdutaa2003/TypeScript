type Person ={

    name:string;
    class?:string;
    age:number;
    isStudent:boolean;
    address:{city:string;Country:string}
}

const person1:Person={
    name:"Suraj",
    age:23,
    isStudent:true,
    address:{city:"Dhanbad",Country:"India"}

}
console.log(person1);
const person2:Person={
    name:"Suraj",
    age:23,
    isStudent:true,
    address:{city:"Dhanbad",Country:"India"}

}
console.log(person2);
