let form = document.getElementById("form");
let button = document.getElementById("submitButton");
let text = document.getElementById("text");

function submit(){
    console.log("clickety clack!");//apenas para checar no console dse funciona
    text.innerHTML = "Olá, eu sou " + form.name.value + "! Eu gosto muito de " + form.bicho.value.toLowerCase() + ", tanto que eu tenho " + form.quantity.value + " deles!";
}
button.addEventListener("click" , submit);