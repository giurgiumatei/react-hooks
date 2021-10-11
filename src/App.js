import logo from './logo.svg';
import './App.css';
import { useState } from 'react/cjs/react.development';
import React, { useCallback } from "react";


// when you define a function inside a function, a new function object is defined at every re-render
// useful when a child component utilises a function from a parent component

function App() {

  const [count, setCount] = useState(60);

  const showCount = useCallback(() => {
    alert(`Count ${count}`)
  }, [count]);

  return <> <SomeChild handler = {showCount} /> </>;
}

export default App;
