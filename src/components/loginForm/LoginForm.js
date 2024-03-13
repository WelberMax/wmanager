import React from "react";
import Input from "../form/Input";
import SubmitButton from "../form/SubmitButton";
import styles from "./Login.module.css";
import Message from "../pages/Message";

import { useContext } from "react";
import UserContext from "../UserContext";

import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
const apiURL = process.env.REACT_APP_API_URL;

const LoginForm = ({ btntext }) => {
  const { login } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const history = useNavigate();

  const handleLogin = async (e) => {
    try {
      const response = await fetch(`${apiURL}api/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Login bem-sucedido
        // Redirecionar o usuário, armazenar token, etc.
        history("/", {
          state: { message: `Bem vindo ${email} Login bem-sucedido!` },
        });

        //Enviando os dados para o contexto
        login({ email, password });
      }
      if (!response.ok) {
        history("/login", { state: { message: "Email ou senha inválidos" } });
      }
    } catch (error) {
      
      // Erro de rede ou outro erro
      setError("Ocorreu um erro ao tentar fazer login");
    }
  };
  const submit = (e) => {
    e.preventDefault();
    handleLogin();
  };
  let message = "";
  const location = useLocation();
  if (location.state) {
    message = location.state.message;
  }

  return (
    <div>
      {message && <Message type="error" text={message} />}
      <form onSubmit={submit} className={styles.login_container}>
        <Input
          type="text"
          text="E-mail"
          placeholder="Informe o e-mail de usuário"
          name="email"
          handleOnChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="text"
          text="Password"
          placeholder="Informe a senha de usuário"
          name="password"
          handleOnChange={(e) => setPassword(e.target.value)}
        />
        <SubmitButton text={btntext} />
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default LoginForm;
