//Refer: pacakge json setting preset: sets es6 preset that basically does the same thing as use strict but then I don't car e about browser compatibility of using strict
//LET is used instaed of var
import {
    students, total
}
from "./students";
import {
    add, multiplication, subract
}
from "./calculator";
let a = "hello";
console.log(a); {
    let a = 'world';
    console.log(a); // Both values of a will defer as this one is under a block. Block scpoing is the reason why this value will be destoryed out side the scope
}

//CONST is a constant and the value persists through the compilation , the value of b is readonly   
const b = 3;

//STRING MANIPULATION
//concatination
let c = `hello ${a}`; //Template literals to make most common code ${} are used for variables replacing the + singn and the new charater ` is the back ticked string
console.log(c);


//SPREAD OPERATOR- spreads the arrays individual values and inserts them into containing array 
let d = [7, 8, 9];
let e = [6, ...d, 10];
console.log(e);

function print(a, b, c) {
    console.log(a, b, c);
}
let f = [1, 2, 3];
print(...f);

//DESTRUCTURING ASSIGNMENT FOR ARRAYS AND OBJECTS
let g = [100, 200];
let [h, i] = g;
console.log(h, i); //Destructuring array values and assigning them to a new variables.

let wizard = {
    magical: true,
    power: 100
};
let {
    magical, power
} = wizard; //Note: the name of the variables used to destructuring of objects needs to be same as property, it matches the name of the variable with the property key and then destructures it
console.log(magical, power);

//ARROW Functions
//These functions are anonymous (have no name identifier)
//Benefits- do not bind their on this, the scope of this is not within that function scope and is within the global scope or the wrapper function that encloses it
let value = 10;

let increment = () => {
    value++;
}
increment();
console.log('value of value', value);

//WRITE A PROGRAM TO MULTIPLY EACH ELEMENT OF AN ARRAY
function multiply(a, b, c, d) {
    let val = a * a + b * b + c * c + d * d;
    console.log(val);
}
let array = [5, 6, 8, 9];
array.pop();
let array2 = [10, ...array];
multiply(...array2);

//Using map functions with anonymous functions

let points = [10, 20, 30];
points = points.map(element => {
    return element + 1;
});
console.log(points);


//Using arrow functions with filter function
let scores = [100, 12, 34, 56, 78, 98, 76, 5, 4, 23, 12, 88, 90, 87, 56, 65, 78];
let passing = scores.filter(element => {
    return element >= 70;
});
console.log('Passing ', passing);

//LOOKING FOR MODULES ON THE TOP AND PRINTING
console.log(students, total);
console.log(subract(6, 5));

import Entity from "./entity";
class Hobbit extends Entity{
    constructor(name,height){
        super(name,height);//THIS KEYWORD REFERENCES THE PARENT CLASS CONSTRUCTOR DEMOSTRATING INHERITANCE
    }
    greet(){
        console.log(`Hello, I am ${this.name} and my height is ${this.height} for shire !`);
    }
}
let Frodo=new Hobbit("Frodo Baggins",46);
Frodo.greet();


import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App  extends Component{
    render(){
        return(<div> React JS with JSX </div>
              )
            
        
    }
}
ReactDOM.render(<App></App>,document.getElementById('root')
               );//TAKES 2 ARGUMENTS, WHAT TO RENDER AND WHERE TO RENDER , THIS IS REQUIRED TO ACTUALLY RENDER ON THE SCREEN


//ES6 PROMISES IN DETAIL
/*
Prmomises provides a way to hanlde asynchronous processing in a more synchronous fashion. Promises provide guarantees of values irresepctive of whether it is resolved or not unlike callbacks. Also it doesnt matter if we register a handler to get the value like events.Since promises are immutable no other registered handlers can change its value. 
*/
var p= Promise.resolve("foobar"); //IMMEDIATELY RESOLVED PROMISES
p.then((res)=>console.log('Reponse',res)); //GETS VALUE IRRESPECTIVE UNLIKE EVENTS

var p2=new Promise(function(resolve,reject){
   setTimeout(()=>resolve(4),2000); 
});
p2.then((res)=>{
    res+=2;
    console.log('Response when value is changed but promise cannot be changed',res);
});
p2.then((res)=>console.log("Response when retreived",res));

//Promises can be created using the new Promise constructor which handles two arguments resolve and reject
//resolve: calls the future value when it is ready
//reject: a function to call if the future value cannot be resolved
/*Promises can have the following three states
Pending :until a promise is fulfilled
Fulfilled: when the promise is in this state the value is passed to the handler and is considered future value
Rejected: if the second function is called the promise is considered failed or rejected and then this value is passed to the handler
EACH PROMISE CAN BE SATISFIED OR SETTLED ONLY ONCE (i.e. resolved or rejected)
Consuming promises which is the processing of the value once fulfilled we can use the .then() method. This method takes a function that will be have the resolved value once the promise is fulfilled. .then() method actually takes two parameters , first is the function to be called when the promise is fulfilled and the second is the function called when rejected.Omiting one of these functions is possible as it would be passed as null
.catch() is used to handle errors , throwing an error would reject the promise
HANDY: promise.all() will wait for all promises to be settled and then intiate processing. it takes an array of promises and once resolved it returns a promise with an array of fulfilled values.
*/
var urls=[
    'http://www.api.com/items/1234',
    'http://www.api.com/items/5678'
],
itemsPromise= urls.map(fetchJSON);//assume fetch json is a function that uses jquery fn getJSON
Promise.all(itemsPromise).then(function(results){
   console.log('Results',results); 
}).catch(function(err){
    console.log('Error',err);
});
//Incase you dont want to wait for all promises to be resolved but want to execute the first promise, promise.race() can be used. ECMAScript 2015 (6th Edition) was when Promise became a standard.




