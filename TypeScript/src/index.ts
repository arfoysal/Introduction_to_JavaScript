let age: number = 25;
let name: string = "Alice";
let isStudent: boolean = true;
let hobbies: string[] = ["reading", "gaming", "coding"];

function greet(personName: string): string {
    return `Hello, ${personName}!`;
}


console.log(greet(name));

if (age > 18) {
    console.log(`${name} is an adult.`);
}



// the any type
let sales = 123_456_789;
let course = "TypeScript";
let is_published = true;
let level;  
level = 1;
level = "a";
console.log(level);

function render(document: any) {
    console.log(document);
}

// Arrays
let numbers = [1, 2, 3, 4, "5"];
let numbers1 = [1, 2, 3, 4];
let strings: string[] = ["one", "two", "three"];

let number: number[] = [];
number[0] = 1;

// Tuples
let user: [number, string] = [1, "Alice"];

user.push("admin"); // Allowed
console.log(user);

// Enums    
enum Size {
    Small = 1,
    Medium,
    Large
}

let mySize: Size = Size.Medium;
console.log(mySize); // Output: 2   

// Functions with types

function calculateTax(income: number, taxYear= 2020): number {
    if (taxYear < 2020) {
        return income * 1.2;
    }
     else {
        return income * 1.3;
    }
}

console.log(calculateTax(10_000, 2021));
console.log(calculateTax(10_000));

// Interfaces


// Classes with types


// Object types

type Employee = {
    readonly id: number;
    name: string;
}

let employee: Employee = {
    id: 1,
    name: "John"
};

function kgToLbs(weight: number | string): number {
    // Narrowing
    if (typeof weight === "number") {
        return weight * 2.2;
    } else {
        return parseInt(weight) * 2.2;
    }
}
kgToLbs(10);
kgToLbs("10kg");    

// Literal Types
type Quantity = 50 | 100;
let quantity: Quantity = 100;

// Nullable Types
function greet2(name: string | null | undefined) {
    if (name) 
        console.log(name.toUpperCase());
    else 
        console.log("Hola!");   
}
greet2(null);
greet2("Viva");

// Optional Chaining
type Customer = {
    birthday: Date;
}   

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() };

}

let customer = getCustomer(1);

console.log(customer?.birthday.getFullYear());