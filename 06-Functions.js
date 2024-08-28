function addNumbers(a, b) {
    //Escribe una función que devuelve la suma de a y b
    return a + b;
}

function findMax(numbers) {
    //Escribe una función que devuelve el numero maximo de una array "numbers"
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}

function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    //Escribe una función que devuelve cuantos "vowels" dentro de una cadena "str"
    //const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i].toLowerCase())) {
            count++;
        }
    }
    return count;
}

function getSquareRoot(number){
    //Escribe una función que la raíz cuadrada de un numero "number"
    return number*number;
}

export {addNumbers, findMax, countVowels, getSquareRoot}