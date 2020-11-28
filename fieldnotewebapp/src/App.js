import './App.css';
import React, {useState, useEffect} from 'react'
import fire from './fire';

function App() {
  const  [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [emailPasswordError, setPasswordError] = useState('');
  const [hasAccount,setHasAccount ] = useState('false');

  const clearInputs = () =>{
    setEmail("");
    setPassword("");
  }

  const handleLogin = () => {
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
      <header className="App-header">
        we start here
      </header>
    </div>
  );
}

export default App;
