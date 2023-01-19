let lsData = JSON.parse(localStorage.getItem("registerData"));
let form = document.getElementById("form");
console.log(lsData[0])
form.addEventListener("submit", function (event) {
    event.preventDefault();

    let count = 0;
    for (let i = 0; i < lsData.length; i++) {
        if (lsData[i].email === form.email.value && lsData[i].pass === form.pass.value) {
            count++
            break;

        }
    }
    if (count == 1) {
        alert("Login succesful")
        window.location.href = "./calendar.html"

    } else {
        alert("Login fail")
    }

})