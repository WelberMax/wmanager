import poupar from "../img/poupar.png";
import LinkButton from "../layout/LinkButton";
import styles from "./Home.module.css"
import { useLocation } from "react-router-dom";
import Message from "../pages/Message";

function Home() {
  const location = useLocation();
  let message = "";

  if (location.state) {
    message = location.state.message;
  }


  return (
    <section className={styles.home_container}>
      {message && <Message type="success" text={message} />}
      <h1>
        Bem vindo ao <span>wManager</span>
      </h1>
      <p>Comece agora mesmo a criar seus projetos</p>
      <LinkButton to='/newproject' text='Criar projeto'/>
      <img src={poupar} alt="Poupar" />
    </section>
  );
}
export default Home;
