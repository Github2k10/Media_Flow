
// models are being used here
let model = document.getElementById("modal_container");
let closed = document.querySelector("#closed")
let open = document.querySelector("#open")

closed.addEventListener("click", () => {

    model.classList.remove("show")
    document.querySelector(".cont-1").innerHTML = ` <div class="grow">
    <div class="content">
        <h1>Grow your audience on social and beyond</h1>
    <p>Buffer helps you build an audience organically. We’re a</p>
    <p>values-driven company that provides affordable,intuitive,</p>
    <p>intuitive, marketing tools for ambitious people and teams.</p>
    </div>
    <div class="btn">
        <button class="btn-1">Get started now</button>
        <button class="btn-2"><i class="fa-regular fa-circle-play"></i> Watch vedio</button>
    </div>
</div>
<img id ="img1" src="img-1.webp" alt="">`

document.querySelector(".cont-2").innerHTML=`
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>`
})


open.addEventListener("click", () => {

    model.classList.add("show")

    document.querySelector(".cont-1").innerHTML = ""
    document.querySelector(".cont-2").innerHTML = ""



})







// my mini database

let montharr = [
    {
        title: "Free",
        id: "f",
        price: 0,
        desc: "Simplify the noise and test out social media management tools.",
        month: "Per channel per month",
        year: "chargedyear",
        features: ["Basic publishing tools", "Limited usage"]

    },
    {
        title: "Essentials",
        id: "s",
        price: 6,
        desc: "Get the most out of your creative with publishing, analytics & engagement tools.",
        month: "Per channel per month",
        year: "chargedyear",
        features: [" Advanced publishing tools", " Analytics & reporting", "Engagement tools", "Exportable PDF reports"]



    },
    {
        title: "Essentials + Team Pack",
        id: "t",
        price: 12,
        desc: "Collaborate with your team in one place & save time reporting.",
        month: "Per channel per month",
        year: "chargedyear",
        features: [" Advanced publishing tools", " Analytics & reporting", "Engagement tools", " Unlimited team members & clients", "Exportable PDF reports", " Draft approval workflows"]


    },

]
let yeararr = [
    {
        id: "f",
        title: "Free",
        price: 0,
        desc: "Simplify the noise and test out social media management tools.",
        month: "Per channel per month",
        year: "chargedyear",
        features: ["Basic publishing tools", "Limited usage"]

    },
    {
        id: "s",
        title: "Essentials",
        price: 5,
        desc: "Get the most out of your creative with publishing, analytics & engagement tools.",
        month: "Per channel per month",
        year: "chargedyear",
        features: [" Advanced publishing tools", " Analytics & reporting", "Engagement tools", "Exportable PDF reports"]



    },
    {
        id: "t",
        title: "Essentials + Team Pack",
        price: 10,
        desc: "Collaborate with your team in one place & save time reporting.",
        month: "Per channel per month",
        year: "chargedyear",
        features: [" Advanced publishing tools", " Analytics & reporting", "Engagement tools", " Unlimited team members & clients", "Exportable PDF reports", " Draft approval workflows"]


    },
   

]







document.querySelector("#logo").addEventListener("click", () => {
    window.location.replace("index.html")
})
// service count

let count = document.querySelector("#val").value
let c = Number(count)
let add = document.querySelector("#add")
add.addEventListener("click", () => {
    console.log("ok")
    //     let newcount=+count

    c++

    document.querySelector("#val").value = c
    sessionStorage.setItem("count", c)
    document.querySelector("#channels").innerText = c + " channels"
    //   calc()

    calculation()




})



let sub = document.querySelector("#sub")


sub.addEventListener("click", () => {



    let c2 = sessionStorage.getItem("count")
    c2 = Number(c2)
    if (c <= 1) {
        document.querySelector("#val").value = 1
        // calc()
        return
    }

    if (c2 >= 2) {
        c--

        document.querySelector("#val").value = c
        document.querySelector("#channels").innerText = c + " Channels"
        // calc()
        sessionStorage.setItem("count", c)
    } else {
        document.querySelector("#val").value = 1
    }
    console.log(c)
    calculation()
})



// target the elements



function targetarr(arr){
    document.querySelector(".first").addEventListener("click",(event)=>{

        let value= event.path[1].id
      
  let filterdata= arr.filter((item)=>{
    if(value==item.id){
        return item
    }
   })

   console.log(filterdata)
//    let id = filterdata[0].id
//    let style=document.querySelector(`${id}`)
//    style.style.border= "5px solid blue"

   document.querySelector("#plan").innerText=filterdata[0].title
   let cost = filterdata[0].price
 sessionStorage.setItem("P",cost)
      })
      
}



targetarr(montharr)










// Calculations of services

function calculation() {
    let count = sessionStorage.getItem("count")
    count=Number(count)
    if(count){
     count = sessionStorage.getItem("count")
     count=Number(count)
    }else{
     count=1
    }
       let cost =sessionStorage.getItem("P")
       cost = Number(cost)

    let cost2= cost*count
       console.log(cost,count,cost2)
       
       document.querySelector("#total").innerText=cost2
       document.querySelector("#total2").innerText=cost2
       localStorage.setItem("total-billed",cost2)

      


}



//payment button

let btn = document.getElementById("payment")
      

btn.addEventListener("click", () => {
// window.location.href=""

 

})






// check the checkbox

let checkbox = document.getElementById("checkbox")

checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
        createdivs(yeararr)
        document.querySelector("#saving").innerText = "Savings $24/year"
        targetarr(yeararr)
        createdivs(yeararr)
    } else {
       
        document.querySelector("#saving").innerText = "Save $24/year"
        targetarr(montharr)
        createdivs(montharr)
       
    }
})





createdivs(montharr)




// div creater
function createdivs(montharr) {

    document.querySelector(".first").innerHTML = ""

    for (i = 0; i < montharr.length; i++) {
        let div = document.createElement("div")
        let title = document.createElement("h3")
        title.setAttribute("class", "title")
        let id = montharr[i].id
        div.setAttribute("id", id)
        title.innerText = montharr[i].title

        let desc = document.createElement("p")
        desc.innerText = montharr[i].desc
        let price = document.createElement("h2")
        price.style.fontSize="35px"
        price.innerText = "$" + montharr[i].price
        

        let monthline = document.createElement("p")
        monthline.innerText = montharr[i].month
        if (montharr[2].price == 10) {
            let py = document.createElement("p")
            py.innerText = "Charged Yearly"
            div.append(py)
        }
        let feature = document.createElement("h3")
        feature.innerText = "Features"
        let hr = document.createElement("hr")
        hr.setAttribute("class", "hr")
        div.append(title, desc, price, monthline, hr, feature)
        for (k = 0; k < montharr[i].features.length; k++) {
            let f = document.createElement("p")
            f.innerHTML = ` <i class="fa-solid fa-check"style="color:#2c4bff"></i> ${montharr[i].features[k]}` 
            div.append(f)
        }

        document.querySelector(".first").append(div)

    }





}




