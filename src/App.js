import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component'
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Route exact path = '/' component = {Homepage} />
    </div>
  );
}

export default App;
