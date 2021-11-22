import { useContext } from "react";

import { UserContext } from "../../context/UserContext";

export function UseContextHook(): JSX.Element {
  const { user, email } = useContext(UserContext);
  return(
    <main style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div>
        <h3>Nome de usuário: {user}</h3>
        <h3>Email de usuário: {email}</h3>
      </div>
    </main>
  );
};

