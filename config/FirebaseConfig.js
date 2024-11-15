// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: process.env.
//   NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: "gtgh-c8623.firebaseapp.com",
//   databaseURL: "https://gtgh-c8623-default-rtdb.firebaseio.com",
//   projectId: "gtgh-c8623",
//   storageBucket: "gtgh-c8623.appspot.com",
//   messagingSenderId: "921280927739",
//   appId: "1:921280927739:web:b4d23776c86582928a5d5e",
//   measurementId: "G-8TNHKJJRKR"
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "meeting-sarbast.firebaseapp.com",
  projectId: "meeting-sarbast",
  storageBucket: "meeting-sarbast.appspot.com",
  messagingSenderId: "834895003597",
  appId: "1:834895003597:web:489018883199e92aac4e84",
  measurementId: "G-N5MEH06LFX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
