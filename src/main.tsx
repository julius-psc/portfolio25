import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from react-dom/client
import App from './App'; // Import your main App component
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement); // Type assertion is important
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);