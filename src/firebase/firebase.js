import * as firebase from 'firebase';

const config = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.FIREBASE_DATABASE_URL,
	projectId: process.env.FIREBASE_PROJECT_ID,
	storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref().set({
// 	name: 'Pedro Molina',
// 	age: 29,
// 	isSingle: true,
// 	location: {
// 		city: 'Bogota',
// 		country: 'Colombia'
// 	}
// }).then(() => {
//   console.log('Data is saved!');
// }).catch((e) => {
//   console.log('This failed.', e);
// });
// database.ref().set('This is my data');

// database.ref('age').set(30);
// database.ref('location/city').set('Sayayayayay');

// database.ref('attributes').set({
// 	height: 1.85,
// 	weight: 155
// }).then(() => {
//   console.log('Second set call worked.');
// }).catch((e) => {
//   console.log('Things didnt for the second error', e);
// });

// database.ref('isSingle').remove().
// then(() => {
// 	console.log('Data was removed');
// }).catch((e) => {
// 	console.log('Did not remove data', e)
// });

// database.ref('isSingle').set(null);


// database.ref().update({
// 	name: 'Pedritox',
// 	age: 30,
// 	job: {
// 		title: 'Software Developer',
// 		company: 'Amazon'
// 	},
// 	'location/city': 'Seattle',
// 	stressLevel: 9

// });

// database.ref()
// 	.once('value')
// 	.then((snapshot) => {
// 		const val = snapshot.val();
// 		console.log(val);
// 	})
// 	.catch((e) => {
// 		console.log('Error fetching data', e);
// 	});
//Hear when data is changed
// database.ref().on('value', (snapshot) => {
// 	console.log(snapshot.val());
// });
//Unsubscribe
// database.ref().off();
// 
//Challenge

// database.ref().on('value', (snapshot) => {
// 	const val = snapshot.val();
//   	console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });


// database.ref('expenses').push({
//   description: 'Rent',
//   note: '',
//   amount: 109500,
//   createdAt: 976123498763
// });

// database.ref('expenses').push({
//   description: 'Phone bill',
//   note: '',
//   amount: 5900,
//   createdAt: 976123498763
// });

// database.ref('expenses').push({
//   description: 'Food',
//   note: '',
//   amount: 1200,
//   createdAt: 976123498763
// });

// child_removed
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

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses);
//   });

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });

//   console.log(expenses);
// });

// database.ref('expenses').push({
//   description: 'Rent',
//   note: '',
//   amount: 109500,
//   createdAt: 976123498763
// });