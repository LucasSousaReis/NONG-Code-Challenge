import React from 'react';

const login =(props)=>{
    const {email
        ,setEmail 
        ,password
        ,setPassword
        ,handleLogin 
        ,handleSignIn 
        ,hasAccount 
        ,setHasAccount 
        ,emailError 
        ,passwordError} = props;


    return(
        <section className = "login">
            <div className = "loginContainer">
                <label>Username</label>
                <input
                type = "text"
                autoFocus
                required
                value ={email}
                onChange = {(e) =>setEmail(e.target.value)}
                />
                <p className = "ErrorMsg">{emailError}</p>
                <label>Password</label>
                <input
                type = "password"
                required
                value = {password}
                onChange = {(e) =>setPassword(e.target.value)}
                />
                <p className = "ErrorMsg">{passwordError}</p>

            </div>
        </section>
    )


}
export default login;
