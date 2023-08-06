import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database"
              
const firebaseConfig = {
  apiKey: "AIzaSyCudG_S2ZPxxbnjjIqHoV0wbZ7uBSZjvIo",
  authDomain: "hotel-admin-h.firebaseapp.com",
  projectId: "hotel-admin-h",
  storageBucket: "hotel-admin-h.appspot.com",
  messagingSenderId: "259382507174",
  appId: "1:259382507174:web:e7fcc046381f75b90da667"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const db = getDatabase();
export default app;
