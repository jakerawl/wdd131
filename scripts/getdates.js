const currentyear = document.querySelector("#currentyear");

const today = new Date();
currentyear.textContent = today.getFullYear();

document.getElementById("lastModified").innerHTML = document.lastModified;