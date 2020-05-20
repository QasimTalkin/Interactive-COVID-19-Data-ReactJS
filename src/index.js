import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


var startTime = performance.now();
ReactDOM.render(<App/>, document.getElementById('root')); 
var endTime = performance.now();
console.log(`App render time : ${((endTime - startTime)/100).toFixed(2)}s`)