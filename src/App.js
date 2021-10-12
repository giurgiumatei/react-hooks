import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react/cjs/react.development';
import { useDebugValue } from 'react';

// useDebugValue takes as a parameter what is being shown in react dev tools
// useDisplayName is a custom hook made of two hooks
// everything in useDisplayName() (except for the return statement) could have been directly written in the App() function
// but now it is more reusable

function useDisplayName() {
  const [displayName, setDisplayName] = useState();

  useEffect(() => {
    const data = fetchFromDatabase(props.userId);
    setDisplayName(data.displayName);
  }, []);

  useDebugValue(displayName ?? 'loading');

  return displayName;
}


function App() {
  
  const displayName = useDisplayName();

  return <button>{displayName}</button>;
}

export default App;
