import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCvnXv8QR0I3Y8xJtmXWYKTaaTtltjum9E",
  authDomain: "vite-auth-2452d.firebaseapp.com",
  projectId: "vite-auth-2452d",
  storageBucket: "vite-auth-2452d.appspot.com",
  messagingSenderId: "316357727356",
  appId: "1:316357727356:web:fa2eb7480452f7b657a5f9",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
