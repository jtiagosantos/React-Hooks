import { useState, useEffect } from "react";

export function UseEffectHook(): JSX.Element {
  const [count, setCount] = useState<number>(0);

  function handleIncrement() {
    setCount((prevState) => prevState + 1);
  };

  function handleDecrement() {
    setCount((prevState) => prevState - 1);
  };

  useEffect(() => {
    console.log('Run useEffect #1');
  }, []);

  useEffect(() => {
    console.log('Run useEffect #2');
  }, [count]);

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

