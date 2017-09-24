//Refer: pacakge json setting preset: sets es6 preset that basically does the same thing as use strict but then I don't car e about browser compatibility of using strict
//LET is used instaed of var
let a ="hello";
console.log(a);
{
    let a ='world';
    console.log(a);// Both values of a will defer as this one is under a block. Block scpoing is the reason why this value will be destoryed out side the scope
}

//CONST is a constant and the value persists through the compilation , the value of b is readonly   
const b=3;

//STRING MANIPULATION
//concatination
let c=`hello ${a}`; //Template literals to make most common code ${} are used for variables replacing the + singn and the new charater ` is the back ticked string
console.log(c);


//SPREAD OPERATOR- spreads the arrays individual values and inserts them into containing array 
let d=[7,8,9];
let e=[6,...d,10];
console.log(e);

function print(a,b,c){
    console.log(a,b,c);
}
let f=[1,2,3];
print(...f);

//DESTRUCTURING ASSIGNMENT FOR ARRAYS AND OBJECTS
let g=[100,200];
let[h,i]=g;
console.log(h,i);//Destructuring array values and assigning them to a new variables.

let wizard={
    magical:true,
    power:100
};
let {magical,power}=wizard;//Note: the name of the variables used to destructuring of objects needs to be same as property, it matches the name of the variable with the property key and then destructures it
console.log(magical,power);

//ARROW Functions
//These functions are anonymous (have no name identifier)
//Benefits- do not bind their on this, the scope of this is not within that function scope and is within the global scope or the wrapper function that encloses it
let value= 10;

let increment=()=>{
value ++;
}
increment();
console.log('value of value',value)