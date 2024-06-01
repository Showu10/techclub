const form = document.querySelector("#form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const dob = document.querySelector("#dob");
const about = document.querySelector("#about");
const achievements = document.querySelector("#achievements");
const grade = document.querySelector("#grade");
const radiobtn = document.querySelector(".radio-btn");
const btn = document.querySelector(".submit-btn");

form.addEventListener("submit", submitForm);
function submitForm(e) {
    e.preventDefault();
    if(name.value == "" || email.value == "" || dob.value == "" || about.value == "" || achievements.value == "" || grade.value == "" || radiobtn.value == "") {
        alert("Please enter all fields");
    } else {
        alert(`
        ${name.value}
        ${email.value}
        ${dob.value}
        ${about.value}
        ${achievements.value}
        ${grade.value}
        ${radiobtn.value}
        `);
        name.value = "";
        email.value = "";
        dob.value = "";
        about.value = "";
        achievements.value = "";
        grade.value = "";
        radiobtn.value = "";
    }
}