const form = document.getElementById("form")
const surname = document.getElementById("surname")
const name = document.getElementById("name")
const age = document.getElementById("age")
const gmail = document.getElementById("gmail")
const btn = document.getElementById("btn")
const wraper = document.getElementById("wraper")

function validate() {
    if (surname.value.length <= 3) {
        alert("Surname 3 ta dan kop bolsin");
        surname.focus();
        surname.style.outlineColor = "red"
        return false;
    }
    if (name.value.length <= 3) {
        alert("Name 3 ta dan kop bolsin");
        name.focus();
        name.style.outlineColor = "red"
        return false;
    }

    return true
}
function createCard(user) {
    return `
           <div id="user">
                <img class="img" src="https://td-betacom.ru/wp-content/uploads/2021/04/profile-anonymous2.png" alt="">
                <h3>${user.surname}</h3>
                <h3>${user.name}</h3>
                <div class="age">${user.age}</div>
                <p>${user.gmail}</p>
            </div>
        `
}

btn && btn.addEventListener("click", function (event) {
    event.preventDefault()

    const isValed = validate();

    if (!isValed) {
        return;
    }

    const user = {
        surname: surname.value,
        name: name.value,
        age: age.value,
        gmail: gmail.value,
    }

    const card = createCard(user)
    wraper.innerHTML += card
    form.reset()

})