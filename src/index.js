import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TableProvider from "./hooks/tableHook";
import ClickProvider from "./hooks/clickHook";

ReactDOM.render(
  <React.StrictMode>
    <TableProvider>
      <ClickProvider>
    <App />
      </ClickProvider>
    </TableProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
