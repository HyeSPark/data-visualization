import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import LineChart from './components/LineChart';
import './App.css';

function App() {
  return (
    <div className="App">
      <LineChart />
    </div>
  );
}

export default App;
