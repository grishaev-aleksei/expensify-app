// console.log('destructuring');
//
// const person = {
//     // name: 'Andrew',
//     age: 26,
//     location: {
//         city: 'Philadelphia',
//         temp: 32
//     }
// };
// const {name: firstName = 'Anonymous', age} = person;
// const {city, temp: temperature} = person.location;
//
// console.log(`${firstName} is ${age}`);
//
//
// console.log(`It's ${temperature} in ${city}`);

const book = {
    title: 'Ego is the enemy',
    author: 'Andrew Mead',
    publisher: {
        name: 'Penguin'
    }
};

const {name: publisherName = 'Self published'} = book.publisher;

console.log(publisherName);

const user = {
    name: 'Jen',
    age: 24
};

console.log({...user, location: 'Philadelphia',age:29});
