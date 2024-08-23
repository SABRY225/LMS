
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBF-qZy70LA2gaP1X-gzpNf3BDzV3Eb7BI",
  authDomain: "lms-platform-5358b.firebaseapp.com",
  projectId: "lms-platform-5358b",
  storageBucket: "lms-platform-5358b.appspot.com",
  messagingSenderId: "910460753044",
  appId: "1:910460753044:web:007cafc6311f393adf9081",
  measurementId: "G-FY52M9J7GB"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
