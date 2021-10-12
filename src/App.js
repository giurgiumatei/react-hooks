import logo from './logo.svg';
import './App.css';
import {useLayoutEffect, useRef} from 'react';

// works like useEffect hook
// runs after render, but before painting to the screen
// blocks visual updates until callback is finished
function App() {
  const myButton = useRef(null);

  useLayoutEffect(() => {
    const rect = myButton.current.getBoundingClientRect();

    console.log(box.height);
  });

  return <><button ref={ref}></button></>
}

export default App;
