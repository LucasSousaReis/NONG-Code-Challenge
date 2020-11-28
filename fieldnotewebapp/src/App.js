import './App.css';
import React, {useState, useEffect} from 'react'
import fire from './fire';
import Login from './components/Login'

function App() {
  const  [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [PasswordError, setPasswordError] = useState("");
  const [hasAccount,setHasAccount ] = useState("false");

  const clearInputs = () =>{
    setEmail("");
    setPassword("");
  }

  const handleLogin = () => {
    clearInputs();
    fire
    .auth()
    .signInWithEmailAndPassword(email,password)
    .catch((err) =>{
      switch (err.code){
        case "auth/invalid-email":
        case "auth/user-disabled":
          break;
        case "auth/user-not-found":
          setEmailError(err.message);
          break;
        case "auth/wrong-password":
          setPasswordError(err.message);
      }
    }
    );
  };

  const handleSignIn = () => {
    clearInputs();
    fire
    .auth()
    .createUserWithEmailAndPassword(email,password)
    .catch((err) =>{
      switch (err.code){
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(err.message);
          break;
        case "auth/weak-password":
          setPasswordError(err.message);
      }
    }
    );
  };

  const handleLogout = () =>{
    fire.auth().signOut();
  }

  const authListener = () =>{
    fire.auth().onAuthStateChanged((user)=> {
      if (user){
        clearInputs();
        setUser(user);
      }
      else{
        setUser("");
      }
  }
  );
}

useEffect(()=> {
  authListener();
},[])
 


  return (
    <div className="App">
        <Login 
        email = {email}
        setEmail = {setEmail}
        password = {password}
        setPassword = {setPassword}
        handleLogin = {handleLogin}
        handleSignIn = {handleSignIn}
        hasAccount = {hasAccount}
        setHasAccount = {setHasAccount}
        emailError = {emailError}
       // passwordError = {passwordError}
        />
    </div>
  );
}

export default App;
