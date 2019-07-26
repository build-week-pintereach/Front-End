import React from 'react';
import Header from './components/Header/Header';
import CreateBoards from './components/CreateBoards/CreateBoards';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />

      <CreateBoards />
    </div>
  );
}

export default App;
