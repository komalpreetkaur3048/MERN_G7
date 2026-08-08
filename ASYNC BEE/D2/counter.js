//SETINTERVAL
setTimeout(()=>{
    console.log("getting excuted in 3 sec..")
},3000)
console.log("end")

//setInterval --> perform certian task repeatly after specific time
// setInterval(()=>{
//     console.log("Hello world")
//     console.log("Hello world")
// },2000)


let count=0
let cntText=document.getElementById("cnt")
let id;

id=setInterval(()=>{
    count++
    cntText.innerHTML=count
    if(count==3){
        clearInterval(id)
    }
},1000)
