import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "@firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import CheckCard from "../Components/CheckCard/CheckCard";

function AdminPage() {
  const [user, loading, error] = useAuthState(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInAdmin = async () => {
    await signInWithEmailAndPassword(auth, email, password).catch((error) =>
      console.error(error)
    );
  };

  const signmeOut = async () => {
    await signOut(auth).catch((e) => {
      console.error(e);
    });
    console.log(auth.currentUser);
  };

  return (
    <div>
      <h1>Administrator</h1>
      <input
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={signInAdmin}>login</button>
      <button onClick={signmeOut}>sign out</button>
      {user ? <CheckCard /> : <h1>logged out</h1>}{" "}
      {/* Render nothing if user is falsey */}
    </div>
  );
}

export default AdminPage;
