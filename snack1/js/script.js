//PROGRAMMA PAROLA INVERTITA

const button = document.querySelector("#button");
let userText;

//salvo il testo inserito
button.addEventListener("click", function(){

    userText = document.querySelector("#text").value;
    console.log(userText);


    //creo la function per invertire il testo
    //Prima divido ogni lettera e la inserisco in un array
    //inverto l'ordine dell'array
    //alla fine riunisco gli elementi dell'array

    function invertString(str) {
        return str.split("").reverse().join("");
    }

    //eseguo la funzione per invertire il testo precedentemente salvato
    const invertWord = invertString(userText);
    console.log(invertWord);
})

  