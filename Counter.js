let counter = 0

let dec =document.getElementById("dec")
let res =document.getElementById("res")
let inc =document.getElementById("inc")

const result =document.getElementById("result")

function checkColor(){
    if(counter < 0){
        result.style.color = "red"
    } else if (counter > 0){
        result.style.color = "green"
    }else {
        result.style.color = "black"
    }
}

inc.addEventListener("click", function(){
    counter++
    result.innerHTML = counter
    checkColor()
})
dec.addEventListener("click", function(){
    counter--
    result.innerHTML = counter
    checkColor()
})
res.addEventListener("click", function(){
    counter = 0
    result.innerHTML = counter
    checkColor()
})