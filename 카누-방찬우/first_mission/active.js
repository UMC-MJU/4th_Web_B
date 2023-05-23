const body = document.querySelector('body')
const bar = document.querySelector('.bar')
const footer = document.querySelector('.footer-bar')
const icon = document.querySelector('i')
const countries = document.querySelectorAll(".country");
const locatoin = document.querySelectorAll(".location")

const toggleDarkMode = ( ) => {
    body.classList.toggle('dark-mode')
    bar.classList.toggle('dark-mode')
    footer.classList.toggle('dark-mode')
}

countries.forEach((element) => {
    element.addEventListener("mouseenter", ( ) => {
        element.style.color = "red";
    })

    element.addEventListener("mouseleave", ( ) => {
        element.style.color = "";
    })
})

locatoin.forEach((element) => {
    element.addEventListener("mouseenter", ( ) => {
        element.style.color = "blue";
    })

    element.addEventListener("mouseleave", ( ) => {
        element.style.color = "";
    })
})