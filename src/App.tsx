import { UseStateHook } from "./components/UseStateHook";
import { UseEffectHook } from "./components/UseEffectHook";
import { UseContextHook } from "./components/useContextHook";
import { UseReducerHook } from "./components/UseReducerHook";
import { UseCallbackHook } from "./components/UseCallbackHook";
import { UseMemoHook } from './components/UseMemo';
import { UseRefHook } from "./components/useRef";
import { UseImperativeHandleHook } from "./components/UseImperativeHandleHook";
import { UseLayoutEffectHook } from "./components/UseLayoutEffect";
import { UseDebugValueHook } from "./components/UseDebugValue";

export default function App(): JSX.Element {
  return(
    <>
      <UseDebugValueHook />
    </>
  );
};