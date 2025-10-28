function sum(a, b) {
    return a + b;
}

console.log(sum(10, 5));

function product(a, b) {
    return a * b;
}
console.log(product(12, 12));

function devide(a, b){
    if (b!=0){
        return a/b;
    }
    else 
        return "Division by zero is not allowed";
}

console.log("Devide:  " + devide(10, 2));
console.log("Devide: " + devide(10, 0));


const bigProduct = product(6363, 9809999);
console.log(bigProduct);


// Anonymous Functions and Arrow Functions
setTimeout(function () {
    console.log("Hey! You rock!");
}, 500);

// Arrow function
setTimeout(() => {
    console.log("Hey! You rock!!");
}, 1000);

// Single line arrow function
setTimeout(() => console.log("Hey! You rock!!!"), 2000);