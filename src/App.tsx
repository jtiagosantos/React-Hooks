import { UseStateHook } from "./components/UseStateHook";
import { UseEffectHook } from "./components/UseEffectHook";
import { UseContextHook } from "./components/useContextHook";
import { UseReducerHook } from "./components/UseReducerHook";
import { UseCallbackHook } from "./components/UseCallbackHook";
import { UseMemoHook } from './components/UseMemo';

export default function App(): JSX.Element {
  return(
    <>
      <UseMemoHook />
    </>
  );
};