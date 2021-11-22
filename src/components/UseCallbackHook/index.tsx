import { useState, useCallback } from "react";

const fnCounter = new Set();

export function UseCallbackHook(): JSX.Element {
  const [counter, setCounter] = useState<number>(0);

  const handlePlus = useCallback(() => {
    setCounter(prevState => prevState + 1);
  }, []);
  
  fnCounter.add(handlePlus);
  console.log(fnCounter.size);

  return(
    <main style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center'
      }}>
        <Button onClick={handlePlus} />
        <h4 style={{
          marginLeft: '10px'
        }}>{counter}</h4>
      </div>
    </main>
  );
};

type ButtonProps = {
  onClick: () => void,
};

function Button({ onClick }: ButtonProps) {
  return <button onClick={onClick}>+</button>
};