// Understanding Variables 

// they are used to values in js 
// there are they ways to declare Variables - var, let and const 

let a = 12;
var name = 'john'
const age =21

// Data types in Javascript 

// 1. Primitive data type 
// 2. Reference data type - [],{},()- It is not copied directly it just creates a reference (To copy we can use spread operator)


let b =a; // Here real copy is created because the datatype is Primitive 

let arr = [1,2,3,4,4]
// As this is refernce datatype it will create reference to do real copy we use spread operator

let copied = [...arr]


//Playing with operators

let sum = 12+14;
let div = 12/4;
let subs = 12-12
let mult = 12*5

console.log(sum,div,subs,mult);

//Logical Operators (and,or)

console.log(12 || 13);
console.log(12>34 && 12<23);

// truthy and falsy 

// falsy  = 0 blank string , NaN , null , undefined, false, document.all

// Loops  
// for,for in , foreach,while, do while,for of 

// for(start;end;change){}

for(let i=0;i<12;i++){
    console.log(i);
}

arr.forEach(function(val,idx){
    console.log(idx,val+5);
})

// for in - used in objects

let obj = {
    name : 'abhishek',
    age : 21
}


for(let keys in obj){
    console.log(keys , obj[keys]);
}

// Conditional Statements

// if-else 

if(0){
    console.log("true");
}else{
    console.log("false");
}

// Ternary Operator 
// condition ? true : false 

12>11 ? 'Correct' : 'Incorrect';

// functions


function abcd(){
    // function Statements 
}

function(){
    // anonymous function 
}

()=>{
    // fat arror function
}

a=>{
    // fat arrow with one parameter 
}

()=> 12 // last vala part directly return hojaega 



