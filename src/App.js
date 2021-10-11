import './App.css';
import React, { forwardRef, useImperativeHandle, useRef } from 'react';

//

function CoolButton(props, ref){
  const myButton = useRef(null);

  useImperativeHandle(ref, () => ({
    click: () => {
      console.log('clicking button!');
      myButton.current.click();
    }
  }));

  return (
    <button ref={myButton}></button>
  );
}

function App() {

  const ref = useRef(null);

  return <CoolButton ref={ref}></CoolButton>
}

CoolButton = forwardRef(CoolButton);

export default App;
