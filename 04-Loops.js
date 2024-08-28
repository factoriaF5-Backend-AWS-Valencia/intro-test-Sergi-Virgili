function getNumbers() {
    let numbers = [];
    //Escribe un bucle for para imprimir números del 1 al 10 y colócalos en la matriz "numbers"
    for (let i = 1; i <= 10; i++) {
        numbers.push(i);
    }
    return numbers;
}

function getFruits(fruits) {
    let result = [];
    //Escribe un bucle for para insertar el elemento de la matriz predefinida "fruits" en la matriz "result"
    for (let i = 0; i < fruits.length; i++) {
        result.push(fruits[i]);
    }
    return result;
}

function getEvenNumbers() {
    let numbers = [];
    //Escribe un bucle for que inserta los números pares entre 1 y 20 en la matriz "numbers"
    let number = 2;
    while (number <= 20) {
        numbers.push(number);
        number += 2;
    }
    return numbers;
}

function getPersonDetails(person) {
    let details = [];
    //Utilice un bucle for...in para devolver las claves y los valores de un objeto.
    for (let key in person) {
        details.push(`${key}: ${person[key]}`);
    }
    return details;
}

function getMultiplicationTable() {
    let table = [];
    //Cree una tabla de multiplicar (del 1 al 10) usando bucles for anidados y devuélvala como una matriz 2D.
    for (let i = 1; i <= 10; i++) {
        let row = [];
        for (let j = 1; j <= 10; j++) {
            row.push(i * j);
        }
        table.push(row);
    }
    return table;
}

function fizzBuzz() {
    let result = [];
    //Escribe un bucle que devuelva una matriz de números del 1 al 100 con "Fizz", "Buzz", and "FizzBuzz" logic.
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push('FizzBuzz');
        } else if (i % 3 === 0) {
            result.push('Fizz');
        } else if (i % 5 === 0) {
            result.push('Buzz');
        } else {
            result.push(i);
        }
    }
    return result;
}

function sumArray(numbers) {
    //Escribe un bucle que devuelva la suma de los numeros de una lista "numbers"
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

export { getNumbers, getFruits, getEvenNumbers, getPersonDetails, 
    getMultiplicationTable, fizzBuzz, sumArray };