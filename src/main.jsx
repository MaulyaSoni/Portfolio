import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import aos from 'aos';
import { BrowserRouter } from 'react-router-dom';
import 'aos/dist/aos.css';

aos.init({
  duration: 1000,
  once: true
});
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/Portfolio">
 <App />
  </BrowserRouter>
);

  