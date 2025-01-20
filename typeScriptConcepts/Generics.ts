function identity<T>(value: T): T {
    return value;
}

// Using the function
const num = identity<number>(42);  // T is number
const str = identity<string>("Hello"); // T is string

console.log(num); // Output: 42
console.log(str); // Output: Hello
