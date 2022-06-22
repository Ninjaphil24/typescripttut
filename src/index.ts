// Basic Types
let id: number = 5
let company: string = 'Modinovations'
let isPublished: boolean = true

// 'any' means any type, which means you can transform it later
let x: any = 'Hello'
// This will work with any, even though it starts as string
// x = true 

// You can initialize something and give it value later
let age: number
age = 30

// arrays:  Set the type of values in array
let ids: number[] = [1,2,3,4,5]

let arr: any[] = [1, true, 'Hello']

// Tuple defines type in each spot 
let person: [number, string, boolean] = [1, 'Phil', false]

// Tuple Array
let employee: [number, string][]

employee = [
    [1, 'Phil'],
    [2, 'John'],
    [3, 'Brad'],
]

// Union creates either or type
let pid: string | number
// Can be:
pid = 22
// or pid = '22'

// Enum
enum Direction1 {
    Up = 1,
    Down,
    Left,
    Right
}
enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

console.log(Direction1.Up)
console.log(Direction2.Left)

// Objects
type User = {
    id: number,
    name: string
}

const user: User = {
    id: 1,
    name: 'John'
}

// Type Assertion changes type
let cid: any = 1
// let customerId = <number>cid
let customerId = cid as number