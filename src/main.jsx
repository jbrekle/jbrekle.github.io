import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './HomePage';
import './index.css';

const searchParams = new URLSearchParams(window.location.search);
const display = searchParams.get('display');

if (display === 'true') {
  // Only render if ?display=true is present
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <HomePage />
    </React.StrictMode>
  );
} else {
  document.getElementById('root').innerHTML =
    '<p style="color: red; text-align: center; margin-top: 20%;">under construction</p>';
}