// the way data are kept and accessed in memory, 2 types of datatypes :-
// 1> Primitive datatypes :-
// 7 types : string, Number, Boolean, null,undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100;
const isLoggedIn= false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
const bigNumber = 23435266574788n //BigInt datatype


// 2>Refernce (non-primitive):-
//Array, Objects, Functions

const heroes = ["shaktiman", "naagraj", "doga"] //arrays

//objects
let myObj= {
    name :"utkarsh",
    age: 22,

}


const myFunction = function(){
    //console.log("hello world");
}

//console.log(typeof(bigNumber));
/*Type	Result
Undefined	"undefined"
Null	"object" (reason)
Boolean	"boolean"
Number	"number"
BigInt	"bigint"
String	"string"
Symbol	"symbol"
Function (implements [[Call]] in ECMA-262 terms; classes are functions as well)	"function"
Any other object	"object"*/


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Memory TYpes:-

//1> Stack (Primitive)
// 2> Heap(Non- primitive)


let youtubeName = "utkarshdotcom"
let anotherName = "hodibaba"

console.log(youtubeName);
console.log(anotherName);

let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne
userTwo.email = "utkarsh@google.com"
console.log(userOne.email);
console.log(userTwo.email);
