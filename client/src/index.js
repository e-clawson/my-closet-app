import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { MessageProvider } from "./context/message"
import { UserProvider } from "./context/user"

ReactDOM.render(
  <BrowserRouter>
      <MessageProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </MessageProvider>
  </BrowserRouter>,
  document.getElementById("root")
);