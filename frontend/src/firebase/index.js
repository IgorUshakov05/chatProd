import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDxBeJ_0R-d1m8ILGFwc7hTcqWMDNSUfY4",
  authDomain: "chatgpt-aa11e.firebaseapp.com",
  projectId: "chatgpt-aa11e",
  storageBucket: "chatgpt-aa11e.firebasestorage.app",
  messagingSenderId: "1080080863620",
  appId: "1:1080080863620:web:29780165ec029678944dd1",
  measurementId: "G-YYY3GHWBPC",
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);