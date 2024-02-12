//PROGRAMMA 1 ARRAY 2 NUMERI

//salvo l'array di numeri
const arrayNumbers = [0, 1, 2, 3, 4, 5, 6];

//creo la function per filtrarla
function cutArray(array, posizioneMin, posizioneMax) {

    //eseguo un controllo dei limiti
    if (posizioneMin < 0 || posizioneMax > array.length) {
        return "Valori di posizione non validi";
    }

    //controllo se il min è minore del max
    if (posizioneMin > posizioneMax) {
        return "Il numero deve essere minore del numero di posizione massima";
    }

    //creo un array vuoto
    const newArray = [];

    //ciclo for per scorrere l'array originale
    for (let i = posizioneMin; i <= posizioneMax; i++) {

        //aggiungo degli elementi all'interno del nuovo array
        newArray.push(array[i]);
    }

    return newArray;
}

const result = cutArray(arrayNumbers, 2, 4);
console.log(result);

//stampo in pagina
document.querySelector("#array").innerText = `Array originale: ${arrayNumbers}`;
document.querySelector("#new").innerText = `Array nuovo: ${result}`;