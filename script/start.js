

//mini database

// let arr2 =[
//     {
//         "title":"Traveler",
//         "img":"https://buffer-start-page.s3.amazonaws.com/presets/Default_X2.png"
        
//     },
//     {
//         "title":"Flower shop",
//         "img":"https://buffer-start-page.s3.amazonaws.com/presets/Flower_X2.png"
        
//     },
//     {
//         "title":"Pizza",
//         "img":"https://buffer-start-page.s3.amazonaws.com/presets/Pizza_X2.png"
        
//     },
//     {
//         "title":"Alexoo",
//         "img":"https://buffer-start-page.s3.amazonaws.com/presets/Alexoo_X2.png"
        
//     },
//     {
//         "title":"Alba",
//         "img":"https://buffer-start-page.s3.amazonaws.com/presets/Alba_X2.png"
        
//     },
//     {
//         "title":"Novika",
//         "img":"https://buffer-start-page.s3.amazonaws.com/presets/Novika_X2.png"
        
//     },
//     {
//         "title":"Scot See",
//         "img":"https://buffer-start-page.s3.amazonaws.com/presets/Scott_X2.png"
        
//     },
//     {
//         "title":"Laura and James",
//         "img":"https://buffer-start-page.s3.amazonaws.com/presets/Laurajames_X2.png"
        
//     },
//     {
//         "title":"Simone",
//         "img":"https://buffer-start-page.s3.amazonaws.com/presets/Simone_X2.png"
        
//     },
//     {
//         "title":"Wang",
//         "img":"https://buffer-start-page.s3.amazonaws.com/presets/Wang_X2.png"
        
//     },
//     {
//         "title":"Emmenual",
//         "img":"https://buffer-start-page.s3.amazonaws.com/presets/emmanuel_X2.png"
        
//     },
//     {
//         "title":"Mogli",
//         "img":"https://buffer-start-page.s3.amazonaws.com/presets/mogli_X2.png"
        
//     },
//     {
//         "title":"Sculpture NFT",
//         "img":"https://buffer-start-page.s3.amazonaws.com/presets/SculptureNFT_X2.gif"
        
//     },
    

// ]

let arr = JSON.parse(localStorage.getItem("newarr"))



divcreater()

function divcreater(){


    arr.forEach((item)=>{
        
        let div = document.createElement("div")

        let img = document.createElement("img")
        img.src=item.img
        
        let p= document.createElement("h3")
        p.innerText=item.title
        div.append(img,p)
        document.querySelector(".big_cont").append(div)
    })

   
}


//logo

document.querySelector("#logo").addEventListener("click",()=>{
    window.location.replace("index.html")
})