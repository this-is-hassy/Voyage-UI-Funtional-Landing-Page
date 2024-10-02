"use client"
import { createContext, useContext } from "react";
import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};


const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
  const signupUserWithEmailAndPassword = (email, password) =>
  createUserWithEmailAndPassword(firebaseAuth, email, password);
  
  const singinUserWithEmailAndPass = (email, password) =>
  signInWithEmailAndPassword(firebaseAuth, email, password);
  
  const signinWithGoogle = () => signInWithPopup(firebaseAuth, googleProvider);
  
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) setUser(user);
      else setUser(null);
    });
  }, []);
  
  const isLoggedIn = user ? true : false;
  
  const logout = () => signOut(firebaseAuth);
  return (
    <FirebaseContext.Provider
      value={{
        signupUserWithEmailAndPassword,
        singinUserWithEmailAndPass,
        signinWithGoogle,
        isLoggedIn,
        logout,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
