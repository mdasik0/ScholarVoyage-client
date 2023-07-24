import { createContext, useEffect, useState } from "react";

import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateEmail,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const GoogleProvider = new GoogleAuthProvider();

  // -------------------------------------------------------
  //               Auth Provider Here
  // -------------------------------------------------------

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  // -------------------------------------------------------
  //               Authentication Methods
  // -------------------------------------------------------

  //   ------------- Social Logins ---------------
  const googleSignin = () => {
    setLoading(true);
    return signInWithPopup(auth, GoogleProvider);
  };

  
  //   ------------- Email Password ---------------
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (name, photoUrl) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoUrl,
    });
  };

  const updateName = (name) => {
    return updateProfile(auth.currentUser, {displayName: name})
  }
  
  const updateYourEmailAdress = (email) => {
    return updateEmail(auth.currentUser, email)
  }

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const resetPassword = (email) => {
    setLoading(true)
    return sendPasswordResetEmail(auth, email)
  }

  //   ------------- Log Out -----------------
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  // -------------------------------------------------------
  //                       Auth Change
  // -------------------------------------------------------
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      setUser(loggedUser);
      setLoading(false);
    });

    return () => {
      return unsubscribe();
    };
  }, []);

  //   ---------- Auth Info -----------

  const authInfo = {
    user,
    loading,
    googleSignin,
    createUser,
    updateUser,
    updateYourEmailAdress,
    signInUser,
    updateName,
    resetPassword,
    logout,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
