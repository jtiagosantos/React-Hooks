import { useMemo, useState } from "react";

export function UseMemoHook(): JSX.Element {
  const [counter, setCounter] = useState<number>(0);
  const [input, setInput] = useState('');

  function handlePlus() {
    setCounter((state) => state + 1);
  }

  const value = useMemo(() => {
    console.log('useMemo rodou...');

    return (counter * 99 ** 2) * (9 * 3/4);
  }, [counter]);

  return(
    <main style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center'
      }}>
        <button onClick={handlePlus}>+</button>
        <h4 style={{
          marginLeft: '10px'
        }}>{counter}</h4>
      </div>
      <div>
        <input 
          type="text" 
          value={input} 
          onChange={({ target }) => setInput(target.value)} 
        />
      </div>
    </main>
  );
};