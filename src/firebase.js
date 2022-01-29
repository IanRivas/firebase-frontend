// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: 'AIzaSyDyo3HngahNA5cejG2BUO5y6bxS4hY465I',

  authDomain: 'react-fb-auth-27a4a.firebaseapp.com',

  projectId: 'react-fb-auth-27a4a',

  storageBucket: 'react-fb-auth-27a4a.appspot.com',

  messagingSenderId: '1030659129173',

  appId: '1:1030659129173:web:78180fd050dba17e6c79dc',
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
