
// import { navbar, footer } from "./top_components.js";
// let nav_div = document.getElementById('navbar');
// nav_div.innerHTML = navbar();




let form = document.getElementById("form");
let AppendButtonHere = document.getElementById("AppendButtonHere")
AppendButtonHere.addEventListener("click", () => {
  window.location.href = "adminLogin.html"
})
let lsdata = JSON.parse(localStorage.getItem("admin_data"));
form.addEventListener("submit", function (event) {
  event.preventDefault()
  AppendButtonHere.innerHTML = null
  let obj = {
    first_name: form.first_name.value,
    last_name: form.last_name.value,
    email: form.email.value,
    phone: form.phone.value,
    password: form.password.value,
    employeeCode: form.employeeCode.value,

  }

  localStorage.setItem("admin_data", JSON.stringify(obj))
  let button = document.createElement("button")
  button.innerText = "Go to Admin sign in now"
  AppendButtonHere.append(button)
})


// window.onload = () => {
//   let sum = (localStorage.getItem("paisa")) || 0;
//   document.getElementById("cart2").innerText = `₹` + sum
// }

//fuc to update user name
// let user_div = document.getElementById('Uname');
// function changeName() {
//   let udata = JSON.parse(localStorage.getItem('personal_data'));
//   if (udata) {
//     user_div.innerHTML = null;
//     let h4 = document.createElement('h4');
//     h4.innerText = udata.first_name;
//     user_div.append(h4);
//   }
// }
// changeName();