import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
var a = "15";


function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
      <input type="date" id="datea"></input>
      <h3>{a}</h3>
      <li>{a}</li>
    </div>
    
  );
  root.render(element, document.getElementById('root'));

}
//setInterval(tick, 1000);
root.render(<App />);
reportWebVitals();


