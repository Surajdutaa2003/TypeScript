type Address = {
    street1: string;
    city: string;
};

type Contact = {
    phone: string;
    email: string;
};

type Person8 = Address & Contact; // Intersection of Address and Contact

const personDetails: Person8 = {
    street1: "MG Road",
    city: "Delhi",
    phone: "1234567890",
    email: "example@email.com"
};

console.log(personDetails);
