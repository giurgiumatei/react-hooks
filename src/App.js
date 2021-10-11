import logo from './logo.svg';
import './App.css';
import React, { forwardRef, useRef } from 'react';

//

function CoolButton(props, ref){
  const myButton = useRef(null);

  return (
    <button ref={myButton}></button>
  );
}

CoolButton = forwardRef(CoolButton);

function App() {


  return (<> </>);
}

export default App;
