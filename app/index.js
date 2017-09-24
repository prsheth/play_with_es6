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
let d=`hello ${a}`; //Template literals to make most common code ${} are used for variables replacing the + singn and the new charater ` is the back ticked string
console.log(d);

