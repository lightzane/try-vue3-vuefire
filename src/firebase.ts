/*
    * The snippet below was copied from:
    https://console.firebase.google.com/project/try-vue3-vuefire/overview
    while adding a `Web App` in the project with a nickname of `try-vue3-vuefire-webapp`

    The snippet can be revisited via:
    Project Settings > Your Apps > SDK setup and configuration section

    * Simultaneously, do the following steps:
    1. https://vuefire.vuejs.org/guide/getting-started.html#Installation
    2. https://vuefire.vuejs.org/guide/getting-started.html#Setup
*/

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics'; // ? we do not need for now
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  // measurementId: '',
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app); // ? we do not need for now
