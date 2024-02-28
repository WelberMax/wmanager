import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
//import styled from 'styled-components'
import Home from './components/pages/Home';
import Contato from './components/pages/Contato';
import Projects from './components/pages/Projects';
import Newproject from './components/pages/Newproject';
import Testepage from './components/pages/Testepage'
import Catalogo from './components/pages/Catalogo';

import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Foooter';
import TelaLogin from './components/pages/LoginPage'; 





//Styled component css
/* const H1 = styled.h1
`font-weight: bold;
font-size: 4rem;` */

function App() {
  
  return (
    <Router>
        <Navbar />
        
        <Container customClass='min-height'>
          <Routes>
            <Route path='/'element={<Home />}/>
            <Route path='/contato' element={<Contato />}/>        
            <Route path='/projects' element={<Projects />}/>
            <Route path='/newproject' element={<Newproject />}/>
            <Route path='/testepage' element={<Testepage />}/>
            <Route path='/login' element={<TelaLogin />}/>
            <Route path='/catalogo' element={<Catalogo />}/>
          </Routes>
        </Container>      
        <Footer />
    </Router>
    
  );
}

export default App;
