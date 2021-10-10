import logo from './logo.svg';
import './App.css';
import { createContext, useContext } from 'react';

// React context is a mechanism that allows you to share data throughout the entire component tree
// Here we can pass the moods variable to a tree of components by creating a context
// useContext will take the value from the nearest parent provider

const moods = {
  happy: ':)',
  sad: ':('
};

const MoodContext = createContext(moods);

function MoodEmoji() {
  const mood = useContext(MoodContext);

  return <p>
    {mood}
  </p>
}

function App() {
  return (
    <MoodContext.Provider value={moods.happy}>
      <MoodEmoji></MoodEmoji>
    </MoodContext.Provider>
  );
}

export default App;
