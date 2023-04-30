import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { UserAuthContextProvider } from "./context/UserAuthContext";
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <UserAuthContextProvider>
      <BrowserRouter>
      <ProSidebarProvider>
          <App />
      </ProSidebarProvider>
      </BrowserRouter>
    </UserAuthContextProvider>
);
