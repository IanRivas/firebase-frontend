import { createContext, useContext } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
//esto es el context
export const authContext = createContext();
//esto lo usa para hacer el authContext.Provider

//hook custom para no tener que importar siempre el useContext y el context
export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error('There is not auth provider');
  return context;
};

//esto nos permite decir a que componentes compartimos el context
export function AuthProvider({ children }) {
  //estoy exportando con el provider un objeto , que adentro tiene una funcion signup , {{signup}}
  const signup = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);
  // el value es lo que voy a compartir con los hijos
  return (
    <authContext.Provider value={{ signup }}>{children}</authContext.Provider>
  );
}
