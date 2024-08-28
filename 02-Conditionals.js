function checkEvenOdd(number) {
    //Escribe condicionales para identificar un numero "Even" o "Odd"; par o impar
    return number % 2 === 0 ? "Even" : "Odd";
}

function calculateGrade(score) {
    //Escribe condicionales para clasificar grado segun la nota
    //90-100: "A"
    //80-89: "B"
    //70-79: "C"
    //60-69: "D"
    //0-59: "F"
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return "F";
}

function isLeapYear(year) {
    //Escribe condicionales para identificar un año es bisiesto o no
    if (year % 400 === 0) return true;
    if (year % 100 === 0) return false;
    if (year % 4 === 0) return true;
    return false;
}

function classifyAge(age) {
    //Escribe condicionales para clasificar edad como el siguiente
    //"Child" para edades 0-12
    //"Teenager" para edades 13-19
    //"Adult" para edades 20-64
    //"Senior" para edades 65 y mas
    //"Invalid age" para edades negativas
    if (age >= 0 && age <= 12) return "Child";
    if (age >= 13 && age <= 19) return "Teenager";
    if (age >= 20 && age <= 64) return "Adult";
    if (age >= 65) return "Senior";
    return "Invalid age";
}

function checkNumberSign(number) {
    //Escribe condicionales para identificar numero como positivo o negativo
    if (number > 0) return "Positive";
    if (number < 0) return "Negative";
    return "Zero";
}

function checkVotingEligibility(age) {
    //Escribe condicionales para identificar una edad si es "Eligible" para votar (18 y mas)
    //"Not Eligible" para menos que 18 años
    return age >= 18 ? "Eligible" : "Not Eligible";
}

function getDayOfWeek(dayNumber) {
    //Escribe condicionales para retornar el nombre del día de la semana segun su orden
    switch (dayNumber) {
        case 1: return "Sunday";
        case 2: return "Monday";
        case 3: return "Tuesday";
        case 4: return "Wednesday";
        case 5: return "Thursday";
        case 6: return "Friday";
        case 7: return "Saturday";
        default: return "Invalid day number";
    }
}

export {checkEvenOdd, calculateGrade, isLeapYear, checkNumberSign, checkVotingEligibility, getDayOfWeek, classifyAge}
