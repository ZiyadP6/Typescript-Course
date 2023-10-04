// Basic Types
let age: number = 25
let hobby: string = "Soccer"
let isAdult: boolean = true
let fruit: any = "apple"

// Arrays
let fruits: string[] = ["Apple", "Orange", "Banana"]
let numArr: number[][] = [[1], [2], [3]]

// Tuples
let employee: [number, string] = [1, "Ziyad"]
let employees: [number, string][] = [[2, "Sarah"], [3, "Jack"]]

// Objects
let car: {
    brand: string,
    year: number
} = {
    brand: "Lexus",
    year: 2020
}

// Custom types
type Car = {
    brand: string,
    year: number
}

let car1: Car = {
    brand:"Mercedes",
    year: 2023
}

// Interfaces
interface Car1 {
    brand: string,
    year: number
}

let car2: Car1 = {
    brand: "Lexus",
    year: 2021
}

// Union
let x: string | number = 22

type occupation = "employed" | "student"
let jackOccupation: occupation = "employed"

// Type Assertion
let y: any = "a"
y = <number> 22

// Functions
function add(x: number, y: number): number {
    return x + y
}

add(2, 3)


function sayHi(): void {
    console.log("Hi")
}


// Generics
function copyArr<T>(arr: T[]): T[] {
    return [...arr]
}

let numCopy = copyArr<number>([1, 2, 3])
let strCopy = copyArr<string>(["1", "2,", "3"])


// Enums
enum EyeColor {
    brown = "Common color",
    blue = "Rare color",
    green = "Very rare color"
}

interface Student{
    name: string,
    age?: number,
    eyeColor: EyeColor
}

function displayStudent(student: Student): void {
    const info: string = student.name + "\n" + student.age + "\n" + student.eyeColor
    document.body.innerText = info
}

displayStudent({
    name: "Jack",
    eyeColor: EyeColor.blue
})