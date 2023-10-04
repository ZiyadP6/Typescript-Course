"use strict";
// Basic Types
let age = 25;
let hobby = "Soccer";
let isAdult = true;
let fruit = "apple";
// Arrays
let fruits = ["Apple", "Orange", "Banana"];
let numArr = [[1], [2], [3]];
// Tuples
let employee = [1, "Ziyad"];
let employees = [[2, "Sarah"], [3, "Jack"]];
// Objects
let car = {
    brand: "Lexus",
    year: 2020
};
let car1 = {
    brand: "Mercedes",
    year: 2023
};
let car2 = {
    brand: "Lexus",
    year: 2021
};
// Union
let x = 22;
let jackOccupation = "employed";
// Type Assertion
let y = "a";
y = 22;
// Functions
function add(x, y) {
    return x + y;
}
add(2, 3);
function sayHi() {
    console.log("Hi");
}
// Generics
function copyArr(arr) {
    return [...arr];
}
let numCopy = copyArr([1, 2, 3]);
let strCopy = copyArr(["1", "2,", "3"]);
// Enums
var EyeColor;
(function (EyeColor) {
    EyeColor["brown"] = "Common color";
    EyeColor["blue"] = "Rare color";
    EyeColor["green"] = "Very rare color";
})(EyeColor || (EyeColor = {}));
function displayStudent(student) {
    const info = student.name + "\n" + student.age + "\n" + student.eyeColor;
    document.body.innerText = info;
}
displayStudent({
    name: "Jack",
    eyeColor: EyeColor.blue
});
