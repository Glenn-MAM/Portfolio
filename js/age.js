
const birthDate = new Date("2003-12-31");
const ageSpan = document.getElementById("age");

const today = new Date();
let age = today.getFullYear() - birthDate.getFullYear();

const m = today.getMonth() - birthDate.getMonth();
if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
  age--;
}

ageSpan.textContent = age;