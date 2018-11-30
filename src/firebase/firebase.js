import * as firebase from 'firebase';
import { isString } from 'util';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// child_added
// Note:  Gets called for existing data as well as adds so it's a little bit different
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });


// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });

//         console.log('Expenses:', expenses);
//     });

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });

//     console.log('Expenses:', expenses);
// }, (err) => {
//     console.log('Error with data fetching', err);
// });


// database.ref('expenses').push({
//     description: 'Gas',
//     note: 'Gassing up for trip',
//     amount: 2000,
//     createdAt: 12349585
// });

// database.ref('notes/-LSIPg2o2mm5D_a5kIpT').update({
//     body: 'Go for a short run'
// });

//database.ref('notes/-LSIPg2o2mm5D_a5kIpT').remove();

// database.ref('notes').push({
//     title: 'More To Do',
//     body: 'Eat a sammich'
// });

// const notes = [{
//     id: '12',
//     title: 'First Note',
//     body: 'This is my note'
// }, {
//     id: '11234',
//     title: 'Second Note',
//     body: 'This is my note'
// }, {
//     id: 'abc123',
//     title: 'Third Note',
//     body: 'This is my note'
// }];

// database.ref('notes').set(notes);

// database.ref().set({
//     name: 'Eric Barb',
//     age: 38,
//     isSingle: false,
//     location: {
//         city: 'Simpsonville',
//         state: 'SC'
//     }
// }).then(() => {
//     console.log('User created');
// }).catch((err) => {
//     console.error('Error: ', err);
// });

//database.ref().set('this is my data');
// database.ref('age').set(40);
// database.ref('location/city').set('Seaford');

// database.ref().update({
//     age: 39
// });

// database.ref('attributes').set({
//     height: 74,
//     weigth: 220
// }).then(() => {
//     console.log('User updated');
// }).catch((err) => {
//     console.error('Error:', err);
// });

// database.ref('isSingle')
//     .remove()
//     .then(() => {
//         console.log('status removed');
//     })
//     .catch((err) => {
//         console.error('Error: ', err);
//     });

// database.ref()
//     .update({
//         name: 'Connor Barb',
//         age: 4,
//         school: 'Pre-K',
//         isSingle: null,
//         'location/city': 'Seaford'
//     })
//     .then(() => {
//         console.log('status removed');
//     })
//     .catch((err) => {
//         console.error('Error: ', err);
//     });

// Getting data a single time.  One and done.
// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((err) => {
//         console.log('Error fetching data');
//     });

// Getting data and follow up changes.  a la subscription...
// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (err) => {
//     console.log('Error with data fetching', err);
// });

// setTimeout(() => {
//     database.ref('age').set(28);
// }, 3500);

// setTimeout(() => {
//     database.ref().off('value', onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(30);
// }, 10500);