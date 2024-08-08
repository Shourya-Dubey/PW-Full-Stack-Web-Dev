const button = document.getElementById("button")

let RandomColor = () =>{
    let val = "0123456789ABCDEF"
    let symbol = "#"
    for(let i = 0; i<6; i++){
        symbol = symbol + val[Math.floor(Math.random()*16)]
    }
    return symbol
}

function colorChange() {
    document.body.style.backgroundColor = RandomColor();
}

button.addEventListener("click",colorChange);