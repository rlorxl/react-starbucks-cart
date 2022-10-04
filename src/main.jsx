import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {BrowserRouter} from 'react-router-dom';
import OrderProvider from '../store/OrderProvider'

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <OrderProvider>
    <App />
    </OrderProvider>
  </BrowserRouter>
);
