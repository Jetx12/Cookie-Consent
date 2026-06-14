const button = document.getElementById('accept-btn')
const popup = document.querySelector('.cookie-popup')


button.addEventListener('click', () =>{
    localStorage.setItem("cookieAccepted", "true")
    popup.style.display = 'none'
})

const accepted = localStorage.getItem("cookieAccepted")

if(accepted === "true"){
    popup.style.display = "none"
}

