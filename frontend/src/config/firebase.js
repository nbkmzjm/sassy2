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
   apiKey: 'AIzaSyDB4a9cUjXlWzGX0l9S4tvW2dxHtcbmSfQ',
   authDomain: 'sassy-a1b0e.firebaseapp.com',
   projectId: 'sassy-a1b0e',
   storageBucket: 'sassy-a1b0e.appspot.com',
   messagingSenderId: '379724529225',
   appId: '1:379724529225:web:f9ead1f9f8074133964998',
   measurementId: 'G-4JXT43C60E',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const signInWithGoogle = new GoogleAuthProvider();
export const db = getFirestore(app);
const analytics = getAnalytics(app);
