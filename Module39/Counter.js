const increment = document.querySelector(".inc")
const decrement = document.querySelector(".dec")
let count = document.querySelector(".count")
const reset = document.querySelector("#reset")


increment.addEventListener("click", ()=>{
    let value = Number(count.innerText)
    if(value >= 10){
        alert("Not more than 10")
    }else{
        count.innerText = value + 1;
    }
})

decrement.addEventListener("click",()=>{
    let value = Number(count.innerText)
    count.innerText = value - 1
})

reset.addEventListener("click", ()=>{
    count.innerText = 0
})