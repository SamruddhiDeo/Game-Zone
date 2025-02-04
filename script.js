let gameImgs = document.querySelectorAll("a")  
let play = document.querySelector(".play")

Array.from(gameImgs).forEach(element => {
    element.addEventListener("mouseover",()=>{
        element.nextElementSibling.style.visibility = "visible"
    })
    element.addEventListener("mouseout",()=>{
       element.nextElementSibling.style.visibility = "hidden"
    })
});