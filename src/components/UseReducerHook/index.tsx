import { useReducer } from "react";

type TypeCounterState = {
  counter: number,
};

type TypeCounterAction = {
  type: 'increment' | 'decrement',
};

export function UseReducerHook(): JSX.Element {
  function reducer(state: TypeCounterState, action: TypeCounterAction) {
    const { type } = action;

    switch(type) {
      case 'decrement':
        return { counter: state.counter > 0 ? state.counter - 1 : 0 }
      case 'increment':
        return { counter: state.counter + 1 }
      default:
        throw new Error();
    }
  };

  const initialState: TypeCounterState = {
    counter: 0,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return(
    <main style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <h3>useReducer example</h3>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
        <h4 style={{
          margin: '0 10px'
        }}>
          {state.counter}
        </h4>
        <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      </div>
    </main>
  );
};

