//FUNCTIONS
function greet(){
    console.log("welcome");
}
greet();

function calculateProduct(a,b){
    // console.log("Product of"+a+" and "+b+"="+a*b);
    return a*b;   //if we don't write return function will print undefined on consoling function call below
}
console.log(calculateProduct(12,8));

function calculateSubtraction(a,b){
    return a-b;
}

console.log(calculateSubtraction(12,8));

let res=calculateProduct(5,4)+calculateSubtraction(4,3);
console.log(res);

//FUNCTION EXPRESSION
let x=function(a,b){
    return a%b;
}
console.log(x(9,3));

//ARROW FUNCTION
let checkEven=(p)=>p%2==0;
console.log(checkEven(5));

// let prod=()=>{
//     let q=19;
//     return p*q
// }

//DEFAULT PARAMETER
let checkNationality=(country="Indian")=>{
    return `Nationality of this person is ${country}`
}
let res=checkNationality("American")
console.log(res)