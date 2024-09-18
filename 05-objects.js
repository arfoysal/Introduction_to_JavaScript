const cookie = {
    name: "Chocolate Chip",
    isGlutenFree: false,
    "+Yummy": true,
    eatCookie: function () {
        console.log("I am eating " + this.name);
    }
};
console.log(cookie);
console.log(cookie.name);
cookie.name = "Chip Chocolate";
console.log(cookie.name);
cookie.isGlutenFree = true;
console.log(cookie);
console.log(cookie["+Yummy"]);
console.log(cookie.eatCookie());

class Cookie {
    constructor(name, isGlutenFree) {
        this.name = name;
        this.isGlutenFree = isGlutenFree;
    }
    eatCookie() {
        console.log("I am eating " + this.name);
    }
}
const myCookie = new Cookie("iced Oatmeal", false);

console.log(myCookie);
console.log(myCookie.name);
console.log(myCookie["isGlutenFree"]);
myCookie.eatCookie();

