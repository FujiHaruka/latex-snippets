import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MathJaxLoader } from './MathJaxLoader';

ReactDOM.render(
  <React.StrictMode>
    <MathJaxLoader>
      <App />
    </MathJaxLoader>
  </React.StrictMode>,
  document.getElementById('root')
);
