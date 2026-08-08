//ARRAYS METHOD IN JAVASCRIPT
let a=["html","css","java","js"];
console.log("array length: "+a.length);

//toString() method:
let b=["html","css","java","js"];
let res=b.toString();
console.log(res);

//join method: to combine array of string with a specified seprator
let c=["html","css","java","js"];
console.log(c.join('|'));

//concat: to combine array
let comb=a.concat(b,c);
console.log(comb);

//push method: 
let arr=[4,5,6,7];
arr.push(9);
console.log(arr);

//unshift : to add element in starting of arr,even multiple elements
let num=[30,50,60];
num.unshift(10);
console.log(num);

//shift:to remove element from starting of arr
let p=[12,34,54,67];
p.shift();
console.log(p);

//pop : to remove last element
let q=[12,43,56,23];
q.pop();
console.log(q);

//splice method: remove element from starting index, second parameter gives no. of lement to be deleted from starting index
let r=[54,23,87,78,43];
r.splice(1,3);
console.log(r);

//first argument : starting index
//second : no of elemnet to be removed
//third : any no. of element, they will be added into arr
let rs=[54,23,87,78,43];
rs.splice(1,0,5,6,7);
console.log(rs);
//in this example starting from 1 not deleting any element but adding given elemnt there


//slice: to cut array  : argument starting-ending(excluded)
let s=[12,13,15,16,17,19];
console.log(s.slice(1,4));

//reverse method: to reverse arr
console.log(s.reverse());

