

//  OBJECT DESTRUCTURING

const person = {
    name: 'Eric Barb',
    age: 38,
    location: {
        city: 'Simpsonville',
        temp: 58
    }
}

// const name = person.name;
// const age = person.age;
// the below sets a default value //
const {name = 'Anonymous', age} = person;
console.log(`${name} is ${age}`);

const {city, temp: temperature} = person.location;
if (city && temperature) {
    console.log(`It's ${temperature} in ${city}.`)
}



const book = {
    title: 'War & Peace',
    author: 'Some Russin',
    publisher: {
        name: 'Some publisher'
    }
};

const { name: publisherName = 'Self published' } = book.publisher;
console.log(publisherName);



//
// ARRAY DESTRUCTURING
//

const address = ['379 Bridge Crossing Dr', 'Simpsonville', 'SC', 29681]

const [ street, cty, state, zip] = address;
console.log(`You are in ${street} ${city}, ${state}`);


const item = ['Hot Coffee', '$1.00', '$2.50', '$4.00'];
const [ description, small, medium, large] = item;

console.log(`A medim ${description} costs ${medium}`)