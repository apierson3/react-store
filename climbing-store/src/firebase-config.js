// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIk1u_wcAXSXQYcieUFhqmzUCFjm5yNDQ",
  authDomain: "https://apierson3.github.io/login",  //blog-6f985.firebaseapp.com
  projectId: "blog-6f985",
  storageBucket: "blog-6f985.appspot.com",
  messagingSenderId: "412536071641",
  appId: "1:412536071641:web:5099de6753145df75825c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();