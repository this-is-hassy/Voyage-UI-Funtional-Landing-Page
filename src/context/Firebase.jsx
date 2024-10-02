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
  apiKey: "AIzaSyA2AL-ypOVtilCjyXPCYjIUff0Pe5KxVZw",
  authDomain: "voyage-landing-page-auth.firebaseapp.com",
  projectId: "voyage-landing-page-auth",
  storageBucket: "voyage-landing-page-auth.appspot.com",
  messagingSenderId: "400572954425",
  appId: "1:400572954425:web:69aab779ee980a2c615ae8",
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
