const burgerButton = document.getElementById('burgerMenu')
const closeBurgerMainButton = document.getElementById('burgerMain')
const burgerMain = document.querySelector('.burgerMain')

const burgerLinks = document.querySelectorAll('.burgerLink')
const body = document.body

burgerButton.addEventListener('click', burgerToggle)
closeBurgerMainButton.addEventListener('click', burgerToggle)
burgerLinks.forEach(el => el.addEventListener('click', burgerToggle) )

function burgerToggle() { 
    
    body.classList.toggle('overflowHidden')
    burgerButton.classList.toggle('disNone')
    burgerMain.classList.toggle('disNone');
}