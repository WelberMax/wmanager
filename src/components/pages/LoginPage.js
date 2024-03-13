import React from 'react'

import styles from './LoginPage.module.css'
import LoginForm from '../loginForm/LoginForm'

import { useContext } from "react";
import UserContext from "../UserContext"



function TelaLogin() {
  const {user, logout} = useContext(UserContext);


  return (
    <div className={styles.login_container}>
      {user ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <>
        <h1>Login</h1>
        <LoginForm btntext="Login"/>        
        </>      
        
      )}
        

    </div>
  )
}

export default TelaLogin;