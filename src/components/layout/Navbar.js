import { Link } from 'react-router-dom'
import Container from "./Container";
import logo from "../img/spreadsheet-app.png"
import styles from "./Navbar.module.css"

function Navbar(){
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to='/'><img src={logo} alt="wManager" /></Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/">Home</Link>                
                    </li>
                    <li className={styles.item}>
                        <Link to="/projects">Projetos</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/contato">Contato</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/testepage">Zona Teste</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/login">Login</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/catalogo">Catalogo</Link>
                    </li>
                   
                </ul>
            </Container>
        </nav>
    )
}
export default Navbar