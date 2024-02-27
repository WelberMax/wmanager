import React from 'react'
import styles from './LoginPage.module.css'
import Login from '../loginForm/Login'

function TelaLogin() {
  return (
    <div className={styles.login_container}>
        <h1>Login de usúario</h1>
        <Login />

    </div>
  )
}

export default TelaLogin;