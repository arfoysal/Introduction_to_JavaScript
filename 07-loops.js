const names = ["Mark", "Ebony", "Sarah"];

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

const numbers = [1, 2, 3, 4];
for (let j = 0; j < numbers.length; j++) {
    console.log(numbers[j] * 3);
}

let password = "tomorrow";
let userusaes = "";

while (userusaes !== password) {
    userusaes = prompt("Please enter your password")
}
alert("Login Successful")


let factorial = 1;
let number = 5;
let original = number;
do {
    factorial = factorial * number;
    number--;

} while (number > 0)

console.log(original + " factorial is " + factorial)