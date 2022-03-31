import { 
  useRef,
  forwardRef, 
  useImperativeHandle, 
  ForwardRefRenderFunction 
} from "react";

interface MessageProps {
  message: string;
}

interface MessageHandler {
  showMessage: () => void;
}

const ImperativeMessage: ForwardRefRenderFunction<
  MessageHandler, 
  MessageProps
> = ({ message }, ref) => {
  function showMessageFunction() {
    alert(message);
  }

  useImperativeHandle(ref, () => ({
    showMessage: showMessageFunction,
  }), []);

  return <></>;
}

const Message = forwardRef(ImperativeMessage);

export function UseImperativeHandleHook() {
  const messageRef = useRef<MessageHandler>(null);

  function handleShowMessage() {
    messageRef.current?.showMessage();
  }

  return (
    <main style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <button 
        type="button" 
        onClick={handleShowMessage}
      >
        Mostrar Mensagem
      </button>

      <Message 
        message='Bora codar! 💜🚀' 
        ref={messageRef} 
      />
    </main>
  );
}

