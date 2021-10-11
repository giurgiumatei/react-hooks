import logo from './logo.svg';
import './App.css';
import { useReducer } from 'react';

// a different way to manage state using the Redux pattern
// instead of updating the state directly, you dispatch actions for the reducer function
// the hook takes the reduction function as parameter and the initial state
// the reduction function will compute the next state
// the first value returned is the reactive state that you want to show in the UI
// the second value returned is a function that can dispatch an action

function reducer(state, action) {
  switch  (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      throw new Error();
  }
}


function App() {
  const [state, dispatch] = useReducer(reducer, 0);
  
  return (<>
    Count: {state}
    <button onClick={() => dispatch({type: 'decrement'})}>-</button>
    <button onClick={() => dispatch({type: 'increment'})}>+</button>
  </>);
}

export default App;
