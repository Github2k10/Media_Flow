let arr =[
    {
        "title":"Traveler",
        "img":"https://buffer-start-page.s3.amazonaws.com/presets/Default_X2.png"
        
    },
    {
        "title":"Flower shop",
        "img":"https://buffer-start-page.s3.amazonaws.com/presets/Flower_X2.png"
        
    },
    {
        "title":"Pizza",
        "img":"https://buffer-start-page.s3.amazonaws.com/presets/Pizza_X2.png"
        
    },
    {
        "title":"Alexoo",
        "img":"https://buffer-start-page.s3.amazonaws.com/presets/Alexoo_X2.png"
        
    },
    {
        "title":"Alba",
        "img":"https://buffer-start-page.s3.amazonaws.com/presets/Alba_X2.png"
        
    },
    {
        "title":"Novika",
        "img":"https://buffer-start-page.s3.amazonaws.com/presets/Novika_X2.png"
        
    },
    {
        "title":"Scot See",
        "img":"https://buffer-start-page.s3.amazonaws.com/presets/Scott_X2.png"
        
    },
    {
        "title":"Laura and James",
        "img":"https://buffer-start-page.s3.amazonaws.com/presets/Laurajames_X2.png"
        
    },
    {
        "title":"Simone",
        "img":"https://buffer-start-page.s3.amazonaws.com/presets/Simone_X2.png"
        
    },
    {
        "title":"Wang",
        "img":"https://buffer-start-page.s3.amazonaws.com/presets/Wang_X2.png"
        
    },
    {
        "title":"Emmenual",
        "img":"https://buffer-start-page.s3.amazonaws.com/presets/emmanuel_X2.png"
        
    },
    {
        "title":"Mogli",
        "img":"https://buffer-start-page.s3.amazonaws.com/presets/mogli_X2.png"
        
    },
    {
        "title":"Sculpture NFT",
        "img":"https://buffer-start-page.s3.amazonaws.com/presets/SculptureNFT_X2.gif"
        
    },
    

]



let newarr = JSON.parse(localStorage.getItem("newarr"))


document.querySelector("form").addEventListener("submit",(event)=>{
    event.preventDefault()
    let title = document.querySelector("#title").value
    let img = document.querySelector("#img").value
    
    let obj={
    title,
    img
    
    }
  if(img=="" || title==""){
    alert("Please add valid img url")
  }else{
    alert("Product added succesfully")
    arr.push(obj)
    
    localStorage.setItem("newarr",JSON.stringify(arr))
  
  }
    
    
})

document.querySelector("#form2").addEventListener("submit",(event)=>{

event.preventDefault()

let name = document.querySelector("#del").value
let arr = JSON.parse(localStorage.getItem("newarr")) || []
let count=0

for (let i=0; i<arr.length;i++) {
    if(arr[i].title==name){
        arr.splice(i,1)
        console.log("match")
      localStorage.setItem("newarr",JSON.stringify(arr))
     
        count++
    }
    
}
if(count>0){
    alert("Data Deleted")


}else{
    alert("Title not matched")

}



})

let length = JSON.parse(localStorage.getItem("newarr"))
length =length.length
document.querySelector("#product").innerText=length


document.querySelector("#logo").addEventListener("click",()=>{

    window.location.href="index.html"

})
