// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBX9xw1KcvfwzHzslPna_3VLphRPnki5rQ',
  authDomain: 'house-mart-4c053.firebaseapp.com',
  projectId: 'house-mart-4c053',
  storageBucket: 'house-mart-4c053.appspot.com',
  messagingSenderId: '676855926720',
  appId: '1:676855926720:web:b70a1010a612f9141a8225',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
