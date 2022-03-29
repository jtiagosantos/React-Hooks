import { useRef } from "react";

export function UseRefHook() {
  console.log('re-render')

  const inputRef = useRef<HTMLInputElement>(null);

  function showInputValue() {
    const value = inputRef.current?.value;

    alert(value);
  }

  return (
    <main style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div>
        <input type="text" ref={inputRef} />
        <button 
          type="button"
          onClick={showInputValue}
        >
          mostrar valor
        </button>
      </div>
    </main>
  );
}


