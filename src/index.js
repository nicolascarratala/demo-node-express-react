import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

let into = (id) => {return document.getElementById(id)}

ReactDOM.render(<App/>, into('app'));