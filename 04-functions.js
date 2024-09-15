function sum(a, b) {
    return a + b;
}

console.log(sum(10, 5));

function product(a, b) {
    return a * b;
}

console.log(product(12, 12));

const bigProduct = product(6363, 9809999);
console.log(bigProduct);

setTimeout(function () {
    console.log("Hey! You rock!!");
}, 1000);

setTimeout(() => {
    console.log("Hey! You rock!!");
}, 1000);

setTimeout(() => console.log("Hey! You rock!!"), 1000);