import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import App from "@/pages/_app";

const firebaseConfig = {
  apiKey: "AIzaSyBEhIjp_DCcnKFSX_VkP72PVUUPB6F4wXQ",
  authDomain: "movie-app-c46cf.firebaseapp.com",
  projectId: "movie-app-c46cf",
  storageBucket: "movie-app-c46cf.appspot.com",
  messagingSenderId: "615690490607",
  appId: "1:615690490607:web:167bdcd3fa91c609fb011a",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp;
const db = getFirestore();
const auth = getAuth();

export default App;
export { db, auth };
