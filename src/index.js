import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ProjectContextProvider } from './context/ProjectContextProvider';
import AuthContextProvider from './context/AuthContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <ProjectContextProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </ProjectContextProvider>
    </React.StrictMode>
  </BrowserRouter>
);
