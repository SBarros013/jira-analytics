import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter } from "react-router-dom";
 
import { ConfigProvider } from 'antd';
import ptBR from "antd/es/locale/pt_BR";
import { Router } from './Router/Router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ConfigProvider locale={ptBR}>
        <Router />
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>
);