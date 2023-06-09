// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.YOURTOY_apiKey,
  authDomain: import.meta.env.YOURTOY_authDomain,
  projectId: import.meta.env.YOURTOY_projectId,
  storageBucket: import.meta.env.YOURTOY_storageBucket,
  messagingSenderId: import.meta.env.YOURTOY_messagingSenderId,
  appId: import.meta.env.YOURTOY_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 export default app;