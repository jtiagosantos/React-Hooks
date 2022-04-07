import { useDebugValue, useState } from "react";

function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function login() {
    setIsAuthenticated(true);
  }

  function logout() {
    setIsAuthenticated(false);
  }

  useDebugValue(
    isAuthenticated ? 
      'User is authenticated' : 
      'User is not authenticated'
  );

  /* useDebugValue(isAuthenticated, (status) => {
    return isAuthenticated ?
      'User is authenticated':
      'User is not authenticated'
  }); */

  return { isAuthenticated, login, logout };
}

export function UseDebugValueHook() {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <main style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <h3>
        Status: {
          isAuthenticated ? 
            'Usuário logado' : 
            'Usuário deslogado'
          }
      </h3>
      <div 
        style={{display: 'flex', gap: '10px'}}
      >
        <button onClick={login}>Login</button>
        <button onClick={logout}>Logout</button>
      </div>
    </main>
  );
}

