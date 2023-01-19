let monthly = document.querySelector("#monthly");
let yearly = document.querySelector('#yearly');
let price = document.querySelectorAll('#price');
let a = document.querySelector('#a').innerHTML;
let b = document.querySelector('#b').innerHTML;
let c = document.querySelector('#c').innerHTML;
let d = document.querySelector('#d').innerHTML;


yearly.style.border = '2px solid blue';
yearly.style.backgroundColor = '#e9ecfe';
yearly.style.color = 'blue';

monthly.addEventListener('click', () =>{
    yearly.style.border = '';
    yearly.style.backgroundColor = '';
    yearly.style.color = '';
    monthly.style.border = '2px solid blue';
    monthly.style.backgroundColor = '#';
    monthly.style.color = 'blue';

    for(let i = 0; i <= 2; i++){
        if(i == 0){
            price[0].innerHTML = '6';
        } else if(i == 1){
            price[1].innerHTML = '12';
        } else {
            price[2].innerHTML = '120';
        }
    }

    document.querySelector('#a').innerHTML = `Manage up to three channels <br> Billed monthly`;
    document.querySelector('#b').innerHTML = 'Add additional channels for $6/month <br> Billed monthly';
    document.querySelector('#c').innerHTML = 'Add additional channels for $12/month <br> Billed monthly';
    document.querySelector('#d').innerHTML = 'Add additional channels for $6/month <br> Billed monthly';
})


yearly.addEventListener('click', () => {
    monthly.style.border = '';
    monthly.style.backgroundColor = '';
    monthly.style.color = '';
    yearly.style.border = '2px solid blue';
    yearly.style.backgroundColor = '#e9ecfe';
    yearly.style.color = 'blue';

    for(let i = 0; i <= 2; i++){
        if(i == 0){
            price[0].innerHTML = '5';
        } else if(i == 1){
            price[1].innerHTML = '10';
        } else {
            price[2].innerHTML = '100';
        }
    }

    document.querySelector('#a').innerHTML = a;
    document.querySelector('#b').innerHTML = b;
    document.querySelector('#c').innerHTML = c;
    document.querySelector('#d').innerHTML = d;
})