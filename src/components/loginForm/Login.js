import React from 'react'
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'
import styles from './Login.module.css'

const Login = () => {
  return (
    <div>
        
        <form className={styles.login_container}>
            
            <Input 
                type='text'
                text='E-mail'
                placeholder='Informe o e-mail de usuário'
                name='email'
                
            />
             <Input 
                type='text'
                text='Password'
                placeholder='Informe a senha de usuário'
                name='password'
                
            />
            <SubmitButton text='Entrar' />
        
        </form>
    </div>
  )
}

export default Login