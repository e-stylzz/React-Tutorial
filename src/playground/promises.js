// create a promise.  
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve('This is my resolved data');
        reject('Something went wrong');
    }, 3500);  
});
console.log('before');

// access promise
promise.then((data) => {
    console.log('1', data);
}).then(() => {
    console.log('2');
}).catch((err) => {
    console.error(err);
});



console.log('after');