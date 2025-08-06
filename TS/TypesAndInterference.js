"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// TypeScript infers the type as number
var inferredNumber = 42;
// TypeScript infers the type as string
var inferredString = "Hello, TypeScript!";
// TypeScript infers the type as boolean
var inferredBoolean = true;
var myCar = {
    make: "Tesla",
    model: "Model S",
    year: 2021,
    isElectric: true,
};
var Manager = /** @class */ (function () {
    function Manager(name, employeeId) {
        this.name = name;
        this.employeeId = employeeId;
    }
    return Manager;
}());
var myCarT = {
    make: "Tesla",
    model: "Model S",
    year: 2021,
    isElectric: true,
};
//Use interfaces when you need to define the shape of an object,
// especially if you expect to extend or merge them.
// Use types for more complex type definitions like
// unions, intersections, and for aliasing primitive types.
