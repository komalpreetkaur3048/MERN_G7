// console.log(Boolean(1))
// console.log(Boolean(0))
// // let a; //not initialized so undefined
// console.log(Boolean(a));
// console.log(7-"2");


// let curr="400 Rs.";
// console.log(parseInt(curr))

// let numString="467";
// let number=+numString;
// console.log(typeof(number))

// let a=false;
// let b=0;
// let c=null;
// console.log(a||b||c);


// let a=false;
// let b='vevk';
// let c='huj';
// console.log(a||b||c);

// if all values ate false then it || will return last falsy values
// if all values are true then && will return last truthy values

// //if first come false value others truthy then && will return false directly from first falsy value
// for(let i=0;i<5;i++){
//     console.log("komalpreet❤️")
// }
// console.log(i)

let obj={
    name:"Aman",
    age:30,
    address:"shimla"
}
for(let key in obj){
    console.log(key);
    console.log(obj[key])
}

const subjects=['javascript','html','css'];
for(let subject of subjects){
    console.log(subject)
}