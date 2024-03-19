import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

//import styled from 'styled-components'
import Home from './components/pages/Home';
import Contato from './components/pages/Contato';
import Projects from './components/pages/Projects';
import Newproject from './components/pages/Newproject';
import Updates from './components/pages/Updates';
import Catalogo from './components/pages/Catalogo';
import Project from './components/pages/Project';

import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Foooter';
import TelaLogin from './components/pages/LoginPage';
import 'bootstrap/dist/css/bootstrap.min.css';

import {useState} from 'react';
import UserContext from './components/UserContext';
import RequireAuth from './components/Auth/RequireAuth'

//Styled component css
/* const H1 = styled.h1
`font-weight: bold;
font-size: 4rem;` */

function App() {
  
  const [user, setUser] = useState(null);
  

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    
    setUser(null);
    
  };
  
  return (
    <>
     
        
      <div>
          <UserContext.Provider value={{user, login, logout}}>
            <Router>
                <Navbar />                
                <Container customClass='min-height'>
                  <Routes>
                    <Route path='/'element={<Home />}/>
                    <Route path='/login' element={<TelaLogin />}/>
                    <Route path='/contato' element={<Contato />}/>        
                    <Route path='/projects' element={<Projects />}/>
                    <Route path='/newproject' element={<RequireAuth> <Newproject /></RequireAuth>}/>
                    
                    <Route path='/updates' element={<Updates />}/>
                    <Route path='/catalogo' element={<Catalogo />}/>
                    <Route path='/project/:id' element={<Project />}/>
                  </Routes>
                </Container>      
                <Footer />
            </Router>
            </UserContext.Provider>
      </div>
      
    </>
    
    
      
    
    
  );
}

export default App;
