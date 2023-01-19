const openmodelButton = document.querySelector('[data-model-target]')
const closemodelButton = document.querySelector('#closeBtn')

openmodelButton.addEventListener("click",()=>{
    const modal = document.querySelector("video")
    openModel(modal)
})

closemodelButton.addEventListener("click",()=>{
    const modal = document.querySelector('video')
    closeModel(modal)
})

function openModel(modal){
    if(modal===null) return
    modal.classList.add('active')
    closemodelButton.classList.add('show')
}

function closeModel(modal){
    if(modal===null) return
    modal.classList.remove('active')
    closemodelButton.classList.remove('show')
    modal.currentTime = 0;
    modal.pause()
}

let getStarted = document.querySelectorAll(".get-started")

getStarted.forEach((elem)=>{
    elem.addEventListener("click", ()=>{
        window.location.href = "register.html"
    })
})

let payment = document.querySelector("#payment")

payment.addEventListener("click",()=>{
    window.location.href="payment.html"
})