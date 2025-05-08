import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles/main.scss";
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ModalProvider } from './components/Modal/ModalContext';

const container = document.getElementById('root');

// Permet d'afficher l'erreur si root n'existe pas
if (!container) {
  throw new Error("Impossible de trouver l'élément root dans le HTML.");
}

const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ModalProvider>
        <App />
      </ModalProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
