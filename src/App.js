import './App.css';
import { useEffect, useState } from 'react';


// useEffect hook takes a function as its argument
// will run the function everytime the dom is updated
// in order not to have infinite loops caused by the DOM constinously updating we add as a second argument an array of dependencies
// if the array is empty then it has no dependencies and will only run once, when the component is initialized
// you can add a return value (function) that will run when the component is removed from the UI
function App() {
  const [count, setCount] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    alert('hello side effect!')

    return () => alert('goodbye component!')

  });

  useEffect(() => {
    fetch('foo').then(() => setLoaded(true));
  }, [count]);

  return (
    <button onClick={() => setCount(count + 1)} style={{ margin: "0 auto" }}>
      {count}
    </button>
  );
}

export default App;