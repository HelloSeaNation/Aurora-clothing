import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import App from './App';
import reportWebVitals from './reportWebVitals';

const stripePromise = loadStripe('pk_live_51OXC61EaCtchjHja9d8RnzqQjUb1jlJqLlIE7mqHJ70vHhIOmOoCvBUmxY1bKbHBHVtuwFR6mE30KucRp4Q1UMVK00k52RO79d');

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Elements stripe={stripePromise}>
      <App />
    </Elements>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
