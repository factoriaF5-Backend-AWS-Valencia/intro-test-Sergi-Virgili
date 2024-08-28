import {describe, it} from 'vitest';
import assert from 'node:assert/strict';
import {name, age, isStudent, person, subjects } from './01-Variables.js';
import { getNumbers, getFruits, getEvenNumbers, getPersonDetails, getMultiplicationTable 
    , fizzBuzz, sumArray
} from './04-Loops.js';
import { findLargestNumber, filterEvenNumbers, reverseArray, findIndexOfElement, mergeArrays, sortArray } from './03-Arrays.js';
import {checkEvenOdd, calculateGrade, isLeapYear, checkNumberSign, checkVotingEligibility, getDayOfWeek, classifyAge} from './02-Conditionals.js';
import {getPersonInfo, incrementAge, addIsStudentProperty, deleteAgeProperty, hasAgeProperty, mergeObjects, getAuthorFullName} from './05-Objects.js';
import {addNumbers, findMax, countVowels, getSquareRoot} from './06-Functions.js';

describe('Variable Declaration', function() {
    it('should have a name that is a string', function() {
        assert.equal(typeof name, 'string');
    });
    //---------------------
    it('should have an age that is a number', function() {
        assert.equal(typeof age, 'number');
    });
    //---------------------
    it('should have isStudent as a boolean', function() {
        assert.equal(typeof isStudent, 'boolean');
    });
    //---------------------
    it('should have person as an object', function() {
        assert.equal(typeof person, 'object');
        assert.equal(person.name, name);
        assert.equal(person.age, age);
        assert.equal(person.isStudent, isStudent);
    });
    it('should have subjects as an array', function() {
        assert.equal(Array.isArray(subjects), true);
        assert.equal(subjects.length, 3);
    });
});

describe('Loops', function() {
    it('should return an array with numbers from 1 to 10', function() {
        const result = getNumbers();
        assert.deepEqual(result, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
    //---------------------
    it('should return an array with the same fruits', function() {
        const fruits = ["apple", "banana", "cherry"];
        const result = getFruits(fruits);
        assert.deepEqual(result, ["apple", "banana", "cherry"]);
    });
    //---------------------
    it('should return an array with even numbers from 2 to 20', function() {
        const result = getEvenNumbers();
        assert.deepEqual(result, [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
    });
    //---------------------
    it('should return an array of person details', function() {
        const person = { name: "John", age: 25, isStudent: true };
        const result = getPersonDetails(person);
        assert.deepEqual(result, ["name: John", "age: 25", "isStudent: true"]);
    });
    //---------------------
    it('should return a 10x10 multiplication table', function() {
        const result = getMultiplicationTable();
        assert.equal(result.length, 10);
        assert.deepEqual(result[0], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        assert.deepEqual(result[9], [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);
    });
    //---------------------
    it('should return an array with Fizz, Buzz, and FizzBuzz', function() {
        const result = fizzBuzz();
        assert.equal(result[2], 'Fizz');
        assert.equal(result[4], 'Buzz');
        assert.equal(result[14], 'FizzBuzz');
    });
    //---------------------
    it('should return the sum of an array', function() {
        const result = sumArray([10, 20, 30, 40, 50]);
        assert.equal(result, 150);
    });
});

describe('Arrays', function() {
    it('should return the largest number in the array', function() {
        const numbers = [1, 5, 3, 9, 2];
        const result = findLargestNumber(numbers);
        assert.equal(result, 9);
    });
    //---------------------
    it('should return an array of even numbers', function() {
        const numbers = [1, 2, 3, 4, 5, 6];
        const result = filterEvenNumbers(numbers);
        assert.deepEqual(result, [2, 4, 6]);
    });
    //---------------------
    it('should return a new array that is the reverse of the original array', function() {
        const arr = [1, 2, 3, 4];
        const result = reverseArray(arr);
        assert.deepEqual(result, [4, 3, 2, 1]);
    });
    //---------------------
    it('should return the index of the specified element', function() {
        const arr = [10, 20, 30, 40];
        const result = findIndexOfElement(arr, 30);
        assert.equal(result, 2);
    });
    //---------------------
    it('should return -1 if the element is not found', function() {
        const arr = [10, 20, 30, 40];
        const result = findIndexOfElement(arr, 50);
        assert.equal(result, -1);
    });
    //---------------------
    it('should return a single array containing all elements from both arrays', function() {
        const arr1 = [1, 2, 3];
        const arr2 = [4, 5, 6];
        const result = mergeArrays(arr1, arr2);
        assert.deepEqual(result, [1, 2, 3, 4, 5, 6]);
    });
    //---------------------
    it('should return the array sorted in ascending order', function() {
        const arr = [4, 2, 7, 1, 9];
        const result = sortArray(arr);
        assert.deepEqual(result, [1, 2, 4, 7, 9]);
    });
});

describe('Conditionals', function() {
    it('should return "Even" for even numbers', function() {
        assert.equal(checkEvenOdd(4), "Even");
    });

    it('should return "Odd" for odd numbers', function() {
        assert.equal(checkEvenOdd(7), "Odd");
    });
    //---------------------
    it('should return "A" for scores 90 and above', function() {
        assert.equal(calculateGrade(95), "A");
    });

    it('should return "B" for scores between 80 and 89', function() {
        assert.equal(calculateGrade(85), "B");
    });

    it('should return "C" for scores between 70 and 79', function() {
        assert.equal(calculateGrade(75), "C");
    });

    it('should return "D" for scores between 60 and 69', function() {
        assert.equal(calculateGrade(65), "D");
    });

    it('should return "F" for scores below 60', function() {
        assert.equal(calculateGrade(50), "F");
    });
    //---------------------
    it('should return true for leap years', function() {
        assert.equal(isLeapYear(2000), true);
        assert.equal(isLeapYear(2020), true);
    });

    it('should return false for non-leap years', function() {
        assert.equal(isLeapYear(1900), false);
        assert.equal(isLeapYear(2021), false);
    });
    //---------------------
    it('should return "Child" for ages 0-12', function() {
        assert.equal(classifyAge(5), "Child");
    });

    it('should return "Teenager" for ages 13-19', function() {
        assert.equal(classifyAge(16), "Teenager");
    });

    it('should return "Adult" for ages 20-64', function() {
        assert.equal(classifyAge(30), "Adult");
    });

    it('should return "Senior" for ages 65 and above', function() {
        assert.equal(classifyAge(70), "Senior");
    });
    //---------------------
    it('should return "Positive" for numbers greater than 0', function() {
        assert.equal(checkNumberSign(10), "Positive");
    });

    it('should return "Negative" for numbers less than 0', function() {
        assert.equal(checkNumberSign(-5), "Negative");
    });

    it('should return "Zero" for the number 0', function() {
        assert.equal(checkNumberSign(0), "Zero");
    });
    //---------------------
    it('should return "Eligible" for ages 18 and above', function() {
        assert.equal(checkVotingEligibility(18), "Eligible");
        assert.equal(checkVotingEligibility(25), "Eligible");
    });

    it('should return "Not Eligible" for ages below 18', function() {
        assert.equal(checkVotingEligibility(17), "Not Eligible");
        assert.equal(checkVotingEligibility(15), "Not Eligible");
    });
    //---------------------
    it('should return the correct day of the week', function() {
        assert.equal(getDayOfWeek(1), "Sunday");
        assert.equal(getDayOfWeek(2), "Monday");
        assert.equal(getDayOfWeek(3), "Tuesday");
        assert.equal(getDayOfWeek(4), "Wednesday");
        assert.equal(getDayOfWeek(5), "Thursday");
        assert.equal(getDayOfWeek(6), "Friday");
        assert.equal(getDayOfWeek(7), "Saturday");
    });
   
    it('should return "Invalid day number" for numbers outside 1-7', function() {
        assert.equal(getDayOfWeek(0), "Invalid day number");
        assert.equal(getDayOfWeek(8), "Invalid day number");
    });
});

describe('Objects', function() {
    it('should return a formatted string with the person\'s details', function() {
        const person = { firstName: 'John', lastName: 'Doe', age: 30 };
        assert.equal(getPersonInfo(person), 'First Name: John, Last Name: Doe, Age: 30');
    });
    //---------------------
    it('should increment the person\'s age by 1', function() {
        const person = { firstName: 'Jane', lastName: 'Doe', age: 25 };
        const updatedPerson = incrementAge(person);
        assert.equal(updatedPerson.age, 26);
    });
    //---------------------
    it('should add the isStudent property and set it to true', function() {
        const person = { firstName: 'Alice', lastName: 'Smith', age: 22 };
        const updatedPerson = addIsStudentProperty(person);
        assert.equal(updatedPerson.isStudent, true);
    });
    //---------------------
    it('should delete the age property from the person object', function() {
        const person = { firstName: 'Bob', lastName: 'Johnson', age: 40 };
        const updatedPerson = deleteAgeProperty(person);
        assert.equal(updatedPerson.age, undefined);
    });
    //---------------------
    it('should return true if the age property exists', function() {
        const person = { firstName: 'Tom', lastName: 'Harris', age: 55 };
        assert.equal(hasAgeProperty(person), true);
    });

    it('should return false if the age property does not exist', function() {
        const person = { firstName: 'Tom', lastName: 'Harris' };
        assert.equal(hasAgeProperty(person), false);
    });
    //---------------------
    it('should merge two objects into one', function() {
        const obj1 = { firstName: 'Lucy', lastName: 'Miller' };
        const obj2 = { age: 29, lastName: 'Jones' };
        const mergedObj = mergeObjects(obj1, obj2);
        assert.deepEqual(mergedObj, { firstName: 'Lucy', lastName: 'Jones', age: 29 });
    });
    //---------------------
    it('should return the full name of the author', function() {
        const book = {
            title: 'JavaScript Basics',
            author: { firstName: 'John', lastName: 'Doe' }
        };
        assert.equal(getAuthorFullName(book), 'John Doe');
    });

});

describe('Functions', function() {
    it('should return the sum of two numbers', function() {
        assert.equal(addNumbers(2, 3), 5);
        assert.equal(addNumbers(-1, 1), 0);
    });
    //---------------------
    it('should return the maximum number in the array', function() {
        assert.equal(findMax([1, 2, 3, 4, 5]), 5);
        assert.equal(findMax([-1, -2, -3, -4]), -1);
        assert.equal(findMax([10, 10, 10]), 10);
    });
    //---------------------
    it('should return the number of vowels in the string', function() {
        assert.equal(countVowels('hello'), 2);
        assert.equal(countVowels('world'), 1);
        assert.equal(countVowels('aeiou'), 5);
    });
    //---------------------
    it('should return the square root of a function', function() {
        assert.equal(getSquareRoot(9), 81);
        assert.equal(countVowels(0), 0);
    });
});
