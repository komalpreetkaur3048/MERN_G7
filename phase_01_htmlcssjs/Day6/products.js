//csllback function:function passed as an argument to another function then itis called as callback function

// function greetMessage(message){
//     message()
// }

// function greetwelcome(){
//     console.log("welcome to chitkara")
// }

// function greetmorning(){
//     console.log("good morning")
// }

// greetMessage(greetwelcome);

// function calculate(a,b,operation){
//     operation(a,b)
// }

// function add(a,b){
//     console.log(a+b)
// }

// function prod(a,b){
//     console.log(a*b)
// }

// function executeDetails(id,callbck){
//     console.log("start")
//     setTimeout(function(){
//         //matching id $ password
//         console.log("Id",id)
//         callbck()
//     },2000)
// }
// function authData(){
//     console.log("User logged in")
// }
//executeDetails(1,function(){
//     console.log("User Authenticated")
//     executeDetails(2,function(){
//         console.log("Post Fetched");
//     })
// }
// )


//this to will work on same time so we have to give callbakc hell
// setTimeout(function(){
//     console.log("Welcome");
// },2000)

// setTimeout(function(){
//     console.log("good morning");
// },2000)


// API:interface through which an system can communicate 
//api brings data from server to frontend
// https:fakeproducts.com-->contains row data provided by server
//fetch function:means pull response from an api

// let response=fetch("https://dummyjson.com/products")

// console.log(response)

//promises :provide completion or rejection of response



// btn.addEventListener("click",()=>{
//         alert("add to cart");
//     })

let container = document.getElementById("container");
let count = 0;
let countDisplay = document.getElementById("count");


fetch("https://dummyjson.com/products")
.then(function(res){
    return res.json();
})
.then(function(data){

    for(let i of data.products){
        container.innerHTML += `
        <div class="card">
            <img src="${i.images[0]}" alt="no image">
            <h3>${i.title}</h3>
            <h6>Brand: ${i.brand}</h6>
            <p>Price: ${i.price}</p>
            <p>Rating: ${i.rating}</p>
            <button class="cart">Add to cart</button>
            <button class="delete">Delete</button>
        </div>
        `;
    }

    let buttons = document.querySelectorAll(".cart");

    buttons.forEach(function(btn){
        btn.addEventListener("click", function(){
            count++;
            countDisplay.textContent = count;
            alert("Added to cart");
        });
    });

    let dltbtn = document.querySelectorAll(".delete");
    for(let el of dltbtn){
        el.addEventListener("click",function(){
            let d=document.getElementById("1")
            d.remove
        })
    }
});





function paymentFunction(orderFunction){
    console.log("Payment is in progress")
    setTimeout(function(){
        console.log("Payment is completed")
        orderFunction()
    },2000)
}

function orderFunction(){
    console.log("Order is being packed")
    setTimeout(function(){
        console.log("Order is completed")
    },2000)
}

paymentFunction(orderFunction)

//res: give raw json format data , we need to convert them into objects
