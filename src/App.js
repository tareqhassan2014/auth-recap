import './App.css';
import firebase from "firebase/app";
import "firebase/auth";
import { useState } from 'react';
import firebaseConfig from './firebase.config';



if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

function App() {
  const [user, setUser] = useState({})


  // handel Google SignIn
  const handelGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        var user = result.user;
        setUser(user);
      }).catch((error) => {
        var errorMessage = error.message;
        console.log(errorMessage);
      });
  }

  // handel Facebook SignIn
  const handelFacebookSignIn = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        var user = result.user;
        setUser(user)
      })
      .catch((error) => {
        var errorMessage = error.message;
        console.log(errorMessage);
      });
  }


  // handelGitHUbSignIn
  const handelGitHUbSignIn = () => {
    const provider = new firebase.auth.GithubAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        var user = result.user;
        setUser(user)
      })
      .catch((error) => {
        var errorMessage = error.message;
        console.log(errorMessage);
      });
  }

  return (
    <div className="App">
      <button onClick={handelGoogleSignIn}>Sign In With Google</button>
      <br />
      <button onClick={handelGitHUbSignIn}>Sign In With GitHUb</button>
      <br />
      <button onClick={handelFacebookSignIn}>Sign In With Facebook</button>
      <p>User: {user.displayName}</p>
      <p>Email: {user.email}</p>
      <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
