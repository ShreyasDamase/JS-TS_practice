"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = ["bokya", 25];
var nikname = Person[0], age = Person[1];
console.log(nikname, age);
// Object destructuring
var user = { name: "shreyas", email: "sss@gmail.com" };
var genericFunc = function (val) {
    return val;
};
var result = genericFunc({ name: "shreyas", email: "sss@gmail.com" });
console.log(result);
var additiON = {
    add: function (a, b) { return a + b; },
};
console.log(additiON.add(4, 5));
