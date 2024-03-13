import { Link } from 'react-router-dom'
import Container from "./Container";
import logo from "../img/spreadsheet-app.png"
import styles from "./Navbar.module.css"

import { useContext } from 'react';
import UserContext from '../UserContext';




function Navbar(){
    const {user, logout} = useContext(UserContext);
    

    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to='/'><img src={logo} alt="wManager" /></Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/">Home</Link>                
                    </li>
                    <li className={styles.item}>
                        <Link to="/contato">Contato</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/updates">Updates</Link>
                    </li>

                    
                    {user ? (
                        // Se o usuaário estiver logado
                        <>
                            <li className={styles.item}>
                                <Link to="/catalogo">Catalogo</Link>
                            </li>
                            <li className={styles.item}>
                                <Link to="/projects">Projetos</Link>
                            </li>
                            <li className={styles.item}>                                
                                <Link onClick={logout} to="/">Logout</Link>
                            </li>
                        </>) : (
                        // Se o usuaário estiver deslogado
                         <li className={styles.item}>
                            <Link to="/login">Login</Link>
                        </li>
                    
                    )}
                   

                   
                </ul>
            </Container>
        </nav>
    )
}
export default Navbar