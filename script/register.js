let form = document.getElementById("form");
let lsData = JSON.parse(localStorage.getItem("registerData")) || []
form.addEventListener("submit", function (event) {
    event.preventDefault()

    let obj = {
        email: form.email.value,
        pass: form.pass.value,
        name: form.first_ame.value,
    }
    lsData.push(obj);
    localStorage.setItem("registerData", JSON.stringify(lsData))
    window.location.href = "./signin.html"

})