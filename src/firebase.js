// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC15XicBMRSuLX0bFpc1omu-V0cwwSe5-o",
  authDomain: "ecommerce-pccenter.firebaseapp.com",
  projectId: "ecommerce-pccenter",
  storageBucket: "ecommerce-pccenter.appspot.com",
  messagingSenderId: "185662928345",
  appId: "1:185662928345:web:f1e480c052c951d59155c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default  db;