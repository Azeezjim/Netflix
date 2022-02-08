import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } fro m '../seed';

// seed database

// we need a config
// const config = {
//   apiKey: '',
//   authDomain: '',
//   databaseURL: '',
//   projectId: '',
//   storageBucket: '',
//   messagingSenderId: '',
//   appId: '',
// };

const config = {
  apiKey: "AIzaSyBlAj74wdN3rc1JFdPoQZOGE9NbSOhcWDY",
  authDomain: "netflix-17fd9.firebaseapp.com",
  projectId: "netflix-17fd9",
  storageBucket: "netflix-17fd9.appspot.com",
  messagingSenderId: "261165121173",
  appId: "1:261165121173:web:8595429e956b2c12ece59c"
};


const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
