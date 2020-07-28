import React from 'react';
import SignIn from './pages/Signin';
// import SignUp from './pages/SignUp';
import GlobalStyle from './styles/global';

import AuthContext from './context/AuthContext';

const App: React.FC = () => (
  <>
    {/* o contexto abaixo faz com que todos os componentes filhos dele tenham acesso ao contexto de autenticação */}
    <AuthContext.Provider value={{ name: 'Robinson' }}>
      <SignIn />
    </AuthContext.Provider>

    <GlobalStyle />
  </>
);

export default App;
