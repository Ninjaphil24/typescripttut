"use strict";
// Basic Types
let id = 5;
let company = 'Modinovations';
let isPublished = true;
// 'any' means any type, which means you can transform it later
let x = 'Hello';
// This will work with any, even though it starts as string
// x = true 
// You can initialize something and give it value later
let age;
age = 30;
// arrays:  Set the type of values in array
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'Hello'];
// Tuple defines type in each spot 
let person = [1, 'Phil', false];
// Tuple Array
let employee;
employee = [
    [1, 'Phil'],
    [2, 'John'],
    [3, 'Brad'],
];
// Union creates either or type
let pid;
// Can be:
pid = 22;
// or pid = '22'
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction1.Up);
console.log(Direction2.Left);
const user = {
    id: 1,
    name: 'John'
};
// Type Assertion changes type
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
// functions
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 3));
function log(message) {
    console.log(message);
}
console.log(log('Message'));
const user1 = {
    id: 1,
    name: 'John'
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
