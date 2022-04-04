import { useLayoutEffect, useState } from "react";

export function UseLayoutEffectHook() {
  const [count, setCount] = useState(0);

  function handlePlus() {
    setCount((prevState) => prevState + 1);
  }

  useLayoutEffect(() => {
    for(let i=0; i<7000; i++) {
      console.log(i);
    }
    console.log('useLayoutEffect rodou');
  }, [count]);

  return (
    <main style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column-reverse',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <button 
        onClick={handlePlus}
      >
        +
      </button>
      <h6>{count}</h6>
    </main >
  );
}

