//
// Object Destructuring
//

// const person = {
//   name: 'Karl',
//   age: 32,
//   location: {
//     city: 'Montreal',
//     temp: -10
//   }
// };

// const { name: firstname = 'Anonymus', age } = person;
// const { city, temp: temperature } = person.location;

// console.log(firstname, temperature);

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName)


//
// Array Destructuring
//

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19283'];

// const [ , city, state = 'New York' ] = address;

// console.log(`You are in ${city} ${state}.`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [type, , mediumPrice] = item;

console.log(`A medium ${type} costs ${mediumPrice}`);