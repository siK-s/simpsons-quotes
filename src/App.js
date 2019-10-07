import React from 'react';
import Navbar from './components/Navbar';
import QuoteCard from './components/QuoteCard';

function App() {
  return (
    <div className="App">
      <Navbar />
      <QuoteCard image='https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185' quote="Shoplifting is a victimless crime, like punching someone in the dark." character="Nelson Muntz" />
      <QuoteCard image='https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNickRiviera.png?1497567511084' quote="Inflammable means flammable? What a country!" character='Dr. Nick' />
    </div>
  );
}

export default App;
