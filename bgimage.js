
let btn1 = document.getElementById("openbutton");
let btn2 = document.getElementById("closebutton");
let overlay = document.getElementById("overlay")
let popup = document.querySelector(".container")

// overlay.style.display= "none"
// btn1.style.background= "red"

btn1.addEventListener("click", function (){
    overlay.style.display= "block"
    popup.classList.add("popup")

})

btn2.addEventListener("click", function (){
    overlay.style.display= "none"
    popup.classList.remove("popup")

})



