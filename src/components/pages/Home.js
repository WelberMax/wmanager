import poupar from "../img/poupar.png";
import LinkButton from "../layout/LinkButton";
import styles from "./Home.module.css"

function Home() {
  return (
    <section className={styles.home_container}>
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
