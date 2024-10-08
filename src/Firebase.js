import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import {addDoc, collection, getFirestore} from 'firebase/firestore'
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyDZQHKgwqbj84UIMt2tqtAmjga7H7zzVaE",
  authDomain: "netflix-clone-7f95e.firebaseapp.com",
  projectId: "netflix-clone-7f95e",
  storageBucket: "netflix-clone-7f95e.appspot.com",
  messagingSenderId: "74830924096",
  appId: "1:74830924096:web:98203af3cba64867bad2a5"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth,email,password)
    const user = res.user;
    await addDoc(collection(db, "user"),{
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    }) 
  } catch (error) {
    console.log(error)
    toast.error(error.code)
  }
}

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth,email,password)
  } catch (error) {
    console.log(error)
    toast.error(error.code)
  }
}


const logout =()=>{
  signOut(auth)
}


export {auth,db,signup,login,logout}