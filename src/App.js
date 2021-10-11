import logo from './logo.svg';
import './App.css';
import { useState } from 'react/cjs/react.development';
import { useMemo } from 'react';

// Memoization = cache result of function call
// use this hook only for expensive calculations!
// takes as parameters the function with the expensive calculation and the variable that when changes, the function should be run
function App() {
  const [count, setCount] = useState(60);

  const expensiveCount = useMemo(() => {
    return count **2;
  }, [count]);


  return <></>;
}

export default App;
