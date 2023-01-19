let back_button = document.querySelector('#back');
let price_tag = document.querySelector('#price');
let email = document.querySelector('#email');
let userEmail = JSON.parse(localStorage.getItem('registerData'));
userEmail = userEmail[userEmail.length-1].email;
let price = 120;

price_tag.innerHTML = `$${price}.00`;
email.setAttribute('placeholder', `Email                        ${userEmail}`)

back_button.addEventListener('click', () =>{
    window.location = './index.html'
})