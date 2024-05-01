// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpAqKqbFmaKIQQ8USYGayBp4qSupUnsTA",
  authDomain: "test-c0063.firebaseapp.com",
  projectId: "test-c0063",
  storageBucket: "test-c0063.appspot.com",
  messagingSenderId: "88544873825",
  appId: "1:88544873825:web:7c0c49ed05f80e27bd8920",
  measurementId: "G-W3TTVLM1VV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
// const analytics = getAnalytics(app);
