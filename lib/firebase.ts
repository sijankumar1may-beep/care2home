import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAjbWX54zAs-qKU1dI7kKYLe47kqDDWo9o",
  authDomain: "care2home-ff435.firebaseapp.com",
  databaseURL: "https://care2home-ff435-default-rtdb.firebaseio.com",
  projectId: "care2home-ff435",
  storageBucket: "care2home-ff435.firebasestorage.app",
  messagingSenderId: "277367292672",
  appId: "1:277367292672:web:e890da013a87d9d7d3a9e5",
  measurementId: "G-VM571DLJ2S"
};

  const app =initializeApp(firebaseConfig);
export const storage = getStorage(app);