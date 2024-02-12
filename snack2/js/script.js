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


//se avessimo ad esempio arr1 = 1,2,3
//E arr2 = a,b,c

const array1 = [1, 2, 3];
const array2 = ['a', 'b', 'c'];

const merged = mergeArrays(array1, array2);
console.log(merged);

  