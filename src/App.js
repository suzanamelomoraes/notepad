import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Notes from './components/Notes';

function App() {
  return (
    <div>
      <Router>
        <Notes />
      </Router>
    </div>
  );
}

export default App;
