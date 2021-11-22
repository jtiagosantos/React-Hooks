import { useState } from "react";

export function UseStateHook(): JSX.Element {
  const [count, setCount] = useState<number>(0);

  function handleIncrement() {
    setCount((prevState) => prevState + 1);
  };

  function handleDecrement() {
    setCount((prevState) => prevState - 1);
  };

  return(
    <main style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <button onClick={handleDecrement}>-</button>
      <h4 style={{ margin: '20px 10px' }}>{count}</h4>
      <button onClick={handleIncrement}>+</button>
    </main>
  );
};

