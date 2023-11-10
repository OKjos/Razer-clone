import './App.css';
// Import necessary modules
import React from 'react';
import { createRoot } from 'react-dom/client'; // Updated import statement
import App from './App';

const rootElement = document.getElementById('TEST');
const root = createRoot(rootElement); // Updated method call
root.render(<App />);
