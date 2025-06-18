import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import './i18n'
import { AppContextProvider } from "./context/AppContext";
ReactDOM.createRoot(document.getElementById("root")).render(
 <BrowserRouter>
   <AppContextProvider>
       <App />
   </AppContextProvider>
  </BrowserRouter>,
);
