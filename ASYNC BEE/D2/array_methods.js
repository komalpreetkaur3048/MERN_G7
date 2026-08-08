// let arr=[2,3,4,5,6]
// easy to read
//mostly used in react

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i])
// }

//function that takes another function as an argument then it is higher order function

let arr=[2,3,4,5,6]
arr.forEach((e)=>console.log(e))

// map --> return array
// let sq=arr.map((e)=>{
//     return e**2
// })
//to write this is an single array
let sq=arr.map((e)=>e**2)
console.log(sq)




//MAP
let products=[
    {"name":"Iphone-15","price":70000},
    {"name":"Samsung galaxy","price":90000},
    {"name":"Matrola","price":20000}
]

let names=products.map((e)=>e.name.toUpperCase())
let prices=products.map((e)=>e.price)
console.log(prices)

//differnece bt map and foreach: map return n array and foreach doesn't


////FILTER
let num=[30,12,14,157,18,23,27]
//filter ->this will return an array based on certain condition
let even=num.filter((el)=>{         //this will return odd value arr
    return el%2==0
})
console.log(even)

let e=num.map((el)=>{               //map will return arr of boolean values for each value
    return el%2==0
})
console.log(e)



//REDUCE
//it will perform certain mathematical operation on your array and rturns single value
let numbers=[10,50,20]
let result=numbers.reduce((acc,e)=>{
    return acc+e
},7)
console.log("result:",result)
//acc:accumulator-->starting value of any result



//SORT
//return modified arr
let ages=[10,22,3,45]
// console.log(ages.sort)
let sortedAges=ages.sort((a,b)=>a+b)
console.log(sortedAges)

let decendingAges=ages.sort((a,b)=>b-a)
console.log(decendingAges)