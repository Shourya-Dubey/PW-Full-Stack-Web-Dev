const button = document.getElementById("button")

let RandomColor = () =>{
    let val = "0123456789ABCDEF"
    let cons = "#"
    for(let i = 0; i<6; i++){
        cons = cons + val[Math.floor(Math.random()*16)]
    }
    return cons
}

function colorChange() {
    document.body.style.backgroundColor = RandomColor();
}

button.addEventListener("click",colorChange);