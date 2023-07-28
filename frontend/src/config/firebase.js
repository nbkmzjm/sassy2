// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: 'AIzaSyC41mfpxkN9FVlG6GnCAJuqUZtt0qzfRLk',
   authDomain: 'sassybuckeye-fa3bd.firebaseapp.com',
   projectId: 'sassybuckeye-fa3bd',
   storageBucket: 'sassybuckeye-fa3bd.appspot.com',
   messagingSenderId: '39626275009',
   appId: '1:39626275009:web:c15f32ae4cc8d3e3577c40',
   measurementId: 'G-QDTRC5ZCE5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const signInWithGoogle = new GoogleAuthProvider();
export const db = getFirestore(app);
const analytics = getAnalytics(app);
