import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import CounterApp from './CounterApp';


const divRoot = ReactDOM.createRoot(document.getElementById('root'))
 
divRoot.render(<CounterApp value ={0} />); 
