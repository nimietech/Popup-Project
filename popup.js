let openPopup= document.getElementById("container")
let overlay= document.getElementById("overlay")
let openbtn= document.querySelector("button")
let closebtn= document.getElementById("closebtn")

// openPopup.style.background= "red"
// openbtn.style.background= "red"
// closebtn.style.background= "red"

openbtn.addEventListener("click", function() {
    overlay.style.display= "block"
    openPopup.style.display= "block"
})

closebtn.addEventListener("click", function() {
    openPopup.style.display= "none"
    overlay.style.display= "none"
})

