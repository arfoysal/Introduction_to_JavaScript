let attendance = 15;
if (attendance < 15) {
    console.log("We have room");
} else if (attendance > 15) {
    console.log("We're over capacity");
} else {
    console.log("We're at full capacity");
}

const car = {
    price: 2000,
    color: "red",
    numDoors: 4
};

if (car.price < 2000 && car.color === "red" && car.numDoors === 4) {
    console.log("We'll take it!");
} else {
    console.log("Welp, it's best to keep looking");
}

const bike = {
    price: 1000,
    color: "red",
};

if (bike.price < 1000 || bike.color === "red") {
    console.log("We'll take it!");
} else {
    console.log("Welp, it's best to keep looking");
}

if (car.price < 2000 || (car.color === "red" && car.numDoors === 4)) {
    console.log("We'll take it!");
} else {
    console.log("Welp, it's best to keep looking");
}