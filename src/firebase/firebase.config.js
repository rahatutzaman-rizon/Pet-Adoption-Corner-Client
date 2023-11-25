// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  
    apiKey: "AIzaSyBlRyMzK5Vv4mLVUnMMv2Limz3d70v7_kw",
    authDomain: "pet-adoption-30ae0.firebaseapp.com",
    projectId: "pet-adoption-30ae0",
    storageBucket: "pet-adoption-30ae0.appspot.com",
    messagingSenderId: "283501307320",
    appId: "1:283501307320:web:ae8493e6ef7f8cad39db4d"
  };
   


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;