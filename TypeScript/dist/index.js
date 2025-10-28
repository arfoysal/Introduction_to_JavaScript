"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let age = 25;
let name = "Alice";
let isStudent = true;
let hobbies = ["reading", "gaming", "coding"];
function greet(personName) {
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
function render(document) {
    console.log(document);
}
// Arrays
let numbers = [1, 2, 3, 4, "5"];
let numbers1 = [1, 2, 3, 4];
let strings = ["one", "two", "three"];
let number = [];
number[0] = 1;
// Tuples
let user = [1, "Alice"];
user.push("admin"); // Allowed
console.log(user);
// Enums    
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
let mySize = Size.Medium;
console.log(mySize); // Output: 2   
// Functions with types
function calculateTax(income, taxYear = 2020) {
    if (taxYear < 2020) {
        return income * 1.2;
    }
    else {
        return income * 1.3;
    }
}
console.log(calculateTax(10_000, 2021));
console.log(calculateTax(10_000));
let employee = {
    id: 1,
    name: "John"
};
function kgToLbs(weight) {
    // Narrowing
    if (typeof weight === "number") {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
kgToLbs(10);
kgToLbs("10kg");
let quantity = 100;
// Nullable Types
function greet2(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log("Hola!");
}
greet2(null);
greet2("Viva");
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log(customer?.birthday.getFullYear());
//# sourceMappingURL=index.js.map