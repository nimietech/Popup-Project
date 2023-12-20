let openPop = document.querySelector(".btn");
let closePop = document.querySelector(".btn2");
let popUp = document.querySelector(".popup");

// button.style.background= "red"

openPop.addEventListener("click", function () {
    popUp.classList.add("open-popup");
})

closePop.addEventListener("click", function () {
    popUp.classList.remove("open-popup");
})