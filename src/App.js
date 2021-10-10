import './App.css';
import { useRef } from 'react';

// allows to create a mutable object that will keep the same reference between renders
// like useState, but mutable objects won't trigger a re-render when the value changes!
// is used when you need to grab an element from the DOM

function App() {

  const myButton = useRef(null);

  const clickIt = () => myButton.current.click();

  return(
    <button ref={myButton}>

    </button>
  );
}

export default App;
