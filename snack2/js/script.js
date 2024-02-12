//PROGRAMMA FONDI ARRAY


//funzione che unisce gli arrai prendendo alternativamente gli elementi grazie al ciclo for
function mergeArrays(arr1, arr2) {

    //varabile dell'array unito
    let mergedArray = [];

    //ciclo per pushare gli elementi di entrambi gli array
    for (let i = 0; i < arr1.length; i++) {
        mergedArray.push(arr1[i], arr2[i]);
    }
    return mergedArray;
}

  