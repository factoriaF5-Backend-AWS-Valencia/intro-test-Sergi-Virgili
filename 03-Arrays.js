function findLargestNumber(numbers) {
    //Escribe una función que toma una array de numeros "numbers" y devuelve el numero max grande de esta array
    let largest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }
    return largest;
}

function filterEvenNumbers(numbers) {
    //Escribe una función que tome una lista de números y devuelva una nueva lista con solo los números pares.
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}

function reverseArray(arr) {
    //Escribe una función que tome una lista y devuelva una nueva lista que sea la inversa de la lista original.
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}

function findIndexOfElement(arr, element) {
    //Escribe una función que encuentre el índice de un elemento especificado en una lista. Devuelve -1 si no se encuentra el elemento.
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return i;
        }
    }
    return -1;
}

function mergeArrays(arr1, arr2) {
    //Escribe una función que tome dos matrices y devuelva una única lista que contenga todos los elementos de ambas listas.
    let merged = [];
    for (let i = 0; i < arr1.length; i++) {
        merged.push(arr1[i]);
    }
    for (let i = 0; i < arr2.length; i++) {
        merged.push(arr2[i]);
    }
    return merged;
}

function sortArray(arr) {
    //Escribe una función que ordene una lista de números en orden ascendente.
    let sorted = arr.slice(); // Create a copy of the array
    for (let i = 0; i < sorted.length - 1; i++) {
        for (let j = 0; j < sorted.length - 1 - i; j++) {
            if (sorted[j] > sorted[j + 1]) {
                // Swap elements
                let temp = sorted[j];
                sorted[j] = sorted[j + 1];
                sorted[j + 1] = temp;
            }
        }
    }
    return sorted;
}

export {findLargestNumber, filterEvenNumbers, reverseArray, findIndexOfElement, mergeArrays, sortArray}