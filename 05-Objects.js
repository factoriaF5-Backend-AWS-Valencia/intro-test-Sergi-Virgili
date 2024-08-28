function getPersonInfo(person) {
    // escribe una función que devuelve datos de un objeto "person", ejemplo;
    // person = {
    //     firstname : "Jack",
    //     lastName : "Milton",
    //     age : 29
    // }
    // en la forma de "First Name: Jack, Last Name: Milton, Age: 29"

    return `First Name: ${person.firstName}, Last Name: ${person.lastName}, Age: ${person.age}`;
}

function incrementAge(person) {
    // escribe una función que aumenta la edad de una persona (como el ejemplo anterior) con 1
    person.age += 1;
    return person;
}

function addIsStudentProperty(person) {
    // escribe una función que prueba si la persona es estudiante o no (propiedad: isStudent)
    person.isStudent = true;
    return person;
}

function deleteAgeProperty(person) {
    // escribe una función que elimina la propiedad de la edad (age)
    delete person.age;
    return person;
}

function hasAgeProperty(person) {
    // escribe una función que prueba si el objeto de la persona (person) tiene una propiedad de edad o no
    return person.hasOwnProperty('age');
}

function mergeObjects(obj1, obj2) {
    // escribe una función que mergea 2 objetos obj1 , obj2
    return { ...obj1, ...obj2 };
}

function getAuthorFullName(book) {
    // escribe una función que devuelve el nombre completo del autor
    // book = {
    //     name : "Harry Potter",
    //     autor : {
    //         firstName : "J. K.",
    //         lastName : "Rowling"
    //     }
    // }
    // en la forma de "J. K. Rowling"
    return `${book.author.firstName} ${book.author.lastName}`;
}

export {getPersonInfo, incrementAge, addIsStudentProperty, deleteAgeProperty, hasAgeProperty, mergeObjects, getAuthorFullName}
