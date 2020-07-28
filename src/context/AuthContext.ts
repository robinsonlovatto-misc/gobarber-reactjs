import { createContext } from 'react';

interface AuthContextData {
  name: string;
}

// {} as AuthContext^é um hack para o typescript permitir inicializar o contect com um obketo vazio
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export default AuthContext;
