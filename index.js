let slider = document.querySelector(".container");
let left = document.querySelector(".left")
let right = document.querySelector(".right")
let sliderBtns = document.querySelectorAll(".sliderBtn")
let image = document.querySelector(".card img")

sliderBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let btn = e.target;
        slider.scrollLeft += btn.classList.contains("left") ? -image.clientWidth : image.clientWidth
    })
})
