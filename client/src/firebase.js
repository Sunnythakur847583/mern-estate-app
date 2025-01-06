// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyJXxw4a0TQAkv7TQv7Ilw69s1uMrzLjs",
  authDomain: "mern-estate-20bf6.firebaseapp.com",
  projectId: "mern-estate-20bf6",
  storageBucket: "mern-estate-20bf6.appspot.com", // Fixed typo here (if incorrect URL was provided).
  messagingSenderId: "284121733678",
  appId: "1:284121733678:web:9578ec1e06cf348b929dbf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); // No `export` here
const storage = getStorage(app);

// Export `app` and `storage` in a single statement
export { app, storage };
