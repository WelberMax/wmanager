import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../UserContext';

function RequireAuth({ children }) {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      // Redireciona para a página de login e fornece uma mensagem de erro como estado
      navigate('/login', { state: { message: 'Faça login para acessar esta página' } });
    }
  }, [user, navigate]); // Execute este efeito sempre que o usuário ou a função de navegação mudar

  return user ? children : null; // Renderiza os filhos apenas se o usuário estiver autenticado
}

export default RequireAuth;
