import React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "./firebase";
import {
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  updateEmail,
  updatePassword,
} from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() {
  return React.useContext(AuthContext);
}
export function AuthProvider({ children }) {
  const [loading, setLoading] = React.useState(true);
  const [currentUser, setCurrentUser] = React.useState();

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  async function signout() {
    await signOut(auth);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function passwordReset(email) {
    return sendPasswordResetEmail(auth, email);
  }

  function emailUpdate(email) {
    return updateEmail(auth.currentUser, email);
  }
  function passwordUpdate(newPassword) {
    return updatePassword(auth.currentUser, newPassword);
  }
  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);
  const value = {
    currentUser,
    signup,
    login,
    signout,
    passwordReset,
    emailUpdate,
    passwordUpdate,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
