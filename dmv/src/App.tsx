import React from 'react';
import './App.css';
import { useRoutes } from 'react-router-dom';
import routes from './routes/routes';
import Navbar from './components/Navbar/Navbar';

// TODO: se renseigner sur 'ThemeProvider' et 'AuthProvider'
function App() {
  // Use hook to manage routes
  const routing = useRoutes(routes);

  return (
    routing
  );
}

export default App;
