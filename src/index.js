import React from 'react';
import './index.css';
import App1 from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';

const doc = createRoot(document.getElementById('root'));

doc.render(
  <React.StrictMode>
    <App1 />
  </React.StrictMode>
);
reportWebVitals();
