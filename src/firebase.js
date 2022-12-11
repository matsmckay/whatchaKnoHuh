// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCa1UpCDazDb5tlDg-TIR-LpzungUsWS1I",
  authDomain: "whatdoyouno-7016c.firebaseapp.com",
  databaseURL: "https://whatdoyouno-7016c-default-rtdb.firebaseio.com",
  projectId: "whatdoyouno-7016c",
  storageBucket: "whatdoyouno-7016c.appspot.com",
  messagingSenderId: "599667450882",
  appId: "1:599667450882:web:798f5a63afde634b69731b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;