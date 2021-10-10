import './App.css';
import { useState } from 'react';

  // used to handle reactive data
  // any data that changes in the application is called state
  // when the state changes, react will update the UI
  // hook takes 1 argument, which is the default state
  // returns the value that changes and the function that updates it

function App() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)} style={{margin : "0 auto"}}>
      {count}
    </button>
  );
}

export default App;
