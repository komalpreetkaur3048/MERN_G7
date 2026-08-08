let name="komalpreet";
let age=21;
let address="shimla";
let marks=[90,87];

let person={
    name:"Aman",
    age:21,
    address:"shimla",
    marks:[90,87]
}
console.log(person);
console.log(person.name);
console.log(person['age']);

let product=new Object();
product['prod_name']="Iphone 14";
product['price']=64000;

//uodating
product['price']=75000;
console.log(product)

// let obj={model:"Tesla",color:"red"};
// delete obj.color;
// console.log(obj);

// let object={model:"tesla"};
// console.log("color" in object);
// console.log(object.hasOwnProperty"model");

let obj={name:"sourav",age:23};
for(let key in obj){
    console.log(key+": "+obj[key]);
}
console.log(Object.keys(obj));
console.log(Object.values(obj));