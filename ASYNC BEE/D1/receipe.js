let cardcontainer=document.getElementById("cards")   //cards div selected in which all cards are present

let fetchdata=async(dish="")=>{
    let response=await fetch(`https://dummyjson.com/recipes/search?q=${dish}`)
    let data=await response.json()
    // console.log(data.response)
    let arr=data.recipes

    // console.log(arr)
    cardcontainer.innerHTML=""
    arr.forEach((el,index)=>{
        cardcontainer.innerHTML+=`
        <div id="d-${index}">
            <img src="${el.image}">
            <h3>${el.name}</h3>
            <p>Time:${el.prepTimeMinutes}</p>
            <button onclick="handleDelete(${index})">Delete</button>
            </div>
        `
    })
}
fetchdata()

function handleDelete(id){
    let div=document.getElementById(`d-${id}`)
    div.remove()
}


function handleSubmit(){
    let search=document.getElementById("find").value 
    fetchdata(search)
}


