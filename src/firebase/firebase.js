import * as firebase from 'firebase';
import expenses from '../tests/fixtures/expenses'

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       newid: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         newid: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   })
//   .catch((e) => {

//   });

// expenses.forEach(expense => database.ref('expenses').push(expense));

// database.ref('notes/-M1CrnlHyf4x3-vAo09A').remove();

// database.ref('notes').push({
//   title: 'COurse topics',
//   body: 'React'
// });

// const firebaseNotes = {
//   notes: {
//     dfsdf: {
//       title: 'First note',
//       body: 'This is my note'
//     },
//     sffsdfsd: {
//       title: 'Another note',
//       body: 'This is my note'
//     }
//   }
// };

// const note = [{
//   id: '12',
//   title: 'First note',
//   body: 'This is my note'
// }, {
//   id: '1234234',
//   title: 'Another note',
//   body: 'This is my note'
// }];

// database.ref('notes').set(note);

// database.ref().on('value', (snapshot) => {
//   const { name, job: { title, company } } = snapshot.val();
//   console.log(`${name} is a ${title} at ${company}`)
// });

// setTimeout(() => {
//   database.ref('name').set('Mike');
// }, 1000);

// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (e) => {
//   console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//   database.ref('age').set(29);
// }, 3500);

// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//   database.ref('age').set(30);
// }, 10500);

// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e)
//   });

// database.ref().set({
//   name: 'Karl',
//   age: 32,
//   stressLevel: 6,
//   job: {
//     title: 'Software Dev',
//     company: 'Google'
//   },
//   location: {
//     city: 'Montreal',
//     country: 'Canada'
//   }
// }).then(() => {
//   console.log('Saved');
// }).catch((e) => {
//   console.log('This failed.', e)
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

// database.ref('isSingle').set(null);

// database.ref().set('This is my data');

// database.ref('age').set(33);

// database.ref('location/city').set('Mtl');

// database.ref('attributes').set({
//   height: 175,
//   weight: 195
// }).then(() => {
//   console.log('Success!');
// }).catch((e) => {
//   console.log('Error');
// });

// database.ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log('Data was removed');
//   })
//   .catch((e) => {
//     console.log('Did not remove data.', e)
//   });