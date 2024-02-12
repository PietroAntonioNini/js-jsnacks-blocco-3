//PROGRAMMA PAROLA INVERTITA

const button = document.querySelector("#button");
let userText;

//salvo il testo inserito
button.addEventListener("click", function(){

    userText = document.querySelector("#text").value;
    console.log(userText);
})